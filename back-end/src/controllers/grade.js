const { request, response } = require("express");

const Grade = require("../models/grade");

const gradeModel = new Grade();

class GradeController {
  async create(request, response) {
    const { schoolId, moduleId, grade, userId } = request.body;

    const newGrade = await gradeModel.create({
      schoolId,
      moduleId,
      userId,
      grade,
    });

    return response.status(201).json(newGrade);
  }

  async readOne(request, response) {
    const { id } = request.params;

    const gradeExists = await grade.readOne(id);

    if (!gradeExists) {
      return response.status(404).json({ message: "Grade not found" });
    }

    return response.status(200).json(gradeExists);
  }

  async readMany(request, response) {
    const grades = await grade.readMany();

    return response.status(200).json(grades);
  }

  async update(request, response) {
    const { id } = request.params;
    const { grade } = request.body;

    const gradeExists = await grade.readOne(id);

    if (!gradeExists) {
      return response.status(404).json({ message: "Grade not found" });
    }

    const updatedGrade = await grade.update(id, {
      grade,
    });

    return response.status(200).json(updatedGrade);
  }

  async delete(request, response) {
    const { id } = request.params;

    const gradeExists = await grade.readOne(id);

    if (!gradeExists) {
      return response.status(404).json({ message: "Grade not found" });
    }

    const deletedGrade = await grade.delete(id);

    return response.status(200).json(deletedGrade);
  }
}

module.exports = GradeController;
