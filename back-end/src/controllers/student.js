const { request, response } = require("express");
const Student = require("../models/student");
const Grade = require("../models/grade");

const hash = require("../helpers/hash");

const student = new Student();
const grade = new Grade();

class StudentController {
  async create(request, response) {
    const { email, name, cpf, password } = request.body;

    const studentExists = await student.readOneByEmail(email);

    if (studentExists) {
      return response.status(400).json({ message: "Student already exists" });
    }

    const hashedPassword = await hash.generateHash(password);

    const newStudent = await student.create({
      email,
      name,
      cpf,
      password: hashedPassword,
    });

    return response.status(201).json(newStudent);
  }

  async readOne(request, response) {
    const { id } = request.params;

    const student = await student.readOne(id);

    if (!student) {
      return response.status(404).json({ message: "Student not found" });
    }

    return response.status(200).json(student);
  }

  async readMany(request, response) {
    const students = await student.readMany();

    return response.status(200).json(students);
  }

  async update(request, response) {
    const { id } = request.params;
    const { email, name, cpf, moduleId, classId } = request.body;

    const student = await student.readOne(id);

    if (!student) {
      return response.status(404).json({ message: "Student not found" });
    }

    const gradeIsEnoguh = await grade.readOne(
      student.schoolId,
      student.moduleId,
      student.id
    );

    if (!gradeIsEnoguh || gradeIsEnoguh.grade < 6) {
      return response.status(400).json({ message: "Grade is not enough" });
    }

    const updatedStudent = await student.update(id, {
      email,
      name,
      cpf,
      moduleId,
      classId,
    });

    return response.status(200).json(updatedStudent);
  }

  async delete(request, response) {
    const { id } = request.params;

    const studentExists = await student.readOne(id);

    if (!studentExists) {
      return response.status(404).json({ message: "Student not found" });
    }

    const student = await student.readOne(id);
  }
}

module.exports = StudentController;
