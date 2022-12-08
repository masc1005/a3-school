const { request, response } = require("express");

const Module = require("../models/module");
const moduleModel = new Module();

class ModuleController {
  async create(request, response) {
    const { name, schoolId } = request.body;

    const module = await moduleModel.create({
      name,
      schoolId,
    });

    return response.status(201).json(module);
  }

  async readOne(request, response) {
    const { id } = request.params;

    const module = await moduleModel.readOne(id);

    if (!module) {
      return response.status(404).json({
        message: "Module not found",
      });
    }

    return response.status(200).json(module);
  }

  async readMany(request, response) {
    const { schoolId } = request.params;

    const modules = await moduleModel.readMany(schoolId);

    return response.status(200).json(modules);
  }

  async update(request, response) {
    const { id } = request.params;
    const { name } = request.body;

    const moduleExists = await moduleModel.readOne(id);

    if (!moduleExists) {
      return response.status(404).json({
        message: "Module not found",
      });
    }

    const module = await moduleModel.update(id, { name });

    return response.status(200).json(module);
  }

  async delete(request, response) {
    const { id } = request.params;

    const moduleExists = await moduleModel.readOne(id);

    if (!moduleExists) {
      return response.status(404).json({
        message: "Module not found",
      });
    }

    const module = await moduleModel.delete(id);

    return response.status(200).json(module);
  }
}

module.exports = ModuleController;
