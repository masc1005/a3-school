const { request, response } = require("express");
const Class = require("../models/class");

const classModel = new Class();

class ClassController {
  async create(request, response) {
    const { name, classId, moduleId } = request.body;

    const newClass = await classModel.create({
      name,
      classId,
      moduleId,
    });

    return response.status(201).json(newClass);
  }

  async readOne(request, response) {
    const { id } = request.params;

    const classExists = await classModel.readOne(id);

    if (!classExists) {
      return response.status(404).json({ message: "Class not found" });
    }

    return response.status(200).json(classExists);
  }

  async readMany(request, response) {
    const classes = await classModel.readMany();

    return response.status(200).json(classes);
  }

  async update(request, response) {
    const { id } = request.params;
    const { name, moduleId } = request.body;

    const classExists = await classModel.readOne(id);

    if (!classExists) {
      return response.status(404).json({ message: "Class not found" });
    }

    const updatedClass = await classModel.update(id, {
      name,
      moduleId,
    });

    return response.status(200).json(updatedClass);
  }

  async delete(request, response) {
    const { id } = request.params;

    const classExists = await classModel.readOne(id);

    if (!classExists) {
      return response.status(404).json({ message: "Class not found" });
    }

    const deletedClass = await classModel.delete(id);

    return response.status(200).json(deletedClass);
  }
}

module.exports = ClassController;
