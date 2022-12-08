const { request, response } = require("express");

const School = require("../models/school");
const schoolModel = new School();

class SchoolController {
  async create(request, response) {
    const { name, address, cnpj, phone, email } = request.body;

    const schoolemail = await schoolModel.readOneByEmail(email);
    const schoolcnpj = await schoolModel.readOneByCnpj(cnpj);

    if (schoolemail || schoolcnpj) {
      return response.status(409).json({
        message: "School already exists",
      });
    }

    const school = await schoolModel.create({
      name,
      address,
      cnpj,
      phone,
      email,
    });

    return response.status(201).json(school);
  }

  async readOne(request, response) {
    const { id } = request.params;

    const school = await schoolModel.readOne(id);

    return response.status(200).json(school);
  }

  async readMany(request, response) {
    const schools = await schoolModel.readMany();

    return response.status(200).json(schools);
  }

  async update(request, response) {
    const { id } = request.params;
    const { name, address, cnpj, phone, email } = request.body;

    const schoolexists = await schoolModel.readOne(id);

    if (!schoolexists) {
      return response.status(404).json({
        message: "School not found",
      });
    }

    const school = await schoolModel.update(id, {
      name,
      address,
      cnpj,
      phone,
      email,
    });

    return response.status(200).json(school);
  }

  async delete(request, response) {
    const { id } = request.params;

    const schoolExists = await schoolModel.readOne(id);

    if (!schoolExists) {
      return response.status(404).json({
        message: "School not found",
      });
    }

    await schoolModel.delete(id);

    return response.status(204).json();
  }
}

module.exports = SchoolController;
