const { request, response } = require("express");

const Professor = require("../models/professor");
const professorModel = new Professor();

const hash = require("../helpers/hash");

class ProfessorController {
  async create(request, response) {
    const { name, email, cpf, password, schoolId, moduleId, classId } =
      request.body;

    const professorExists = await professorModel.readOneByEmail(email);

    if (professorExists) {
      return response.status(409).json({
        message: "Professor already exists",
      });
    }

    const hashedPassword = await hash(password);

    const professor = await professorModel.create({
      name,
      email,
      cpf,
      password: hashedPassword,
      schoolId,
      moduleId,
      classId,
    });

    return response.status(201).json(professor);
  }

  async readOne(request, response) {
    const { id } = request.params;

    const professor = await professorModel.readOne(id);

    if (!professor) {
      return response.status(404).json({
        message: "Professor not found",
      });
    }

    return response.status(200).json(professor);
  }

  async readMany(request, response) {
    const { schoolId } = request.params;

    const professors = await professorModel.readMany(schoolId);

    return response.status(200).json(professors);
  }

  async update(request, response) {
    const { id } = request.params;
    const { name, email, cpf, schoolId, moduleId, classId } = request.body;

    const professorExists = await professorModel.readOne(id);

    if (!professorExists) {
      return response.status(404).json({
        message: "Professor not found",
      });
    }

    const professor = await professorModel.update(id, {
      name,
      email,
      cpf,
      schoolId,
      moduleId,
      classId,
    });

    return response.status(200).json(professor);
  }

  async delete(request, response) {
    const { id } = request.params;

    const professorExists = await professorModel.readOne(id);

    if (!professorExists) {
      return response.status(404).json({
        message: "Professor not found",
      });
    }

    await professorModel.delete(id);

    return response.status(204).json();
  }
}

module.exports = ProfessorController;
