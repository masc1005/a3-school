const prisma = require("../helpers/prisma");

class School {
  async create(data) {
    const { name, address, cnpj, phone, email } = data;
    const school = await prisma.school.create({
      data: {
        name,
        address,
        cnpj,
        phone,
        email,
      },
    });

    return school;
  }

  async readOne(id) {
    const school = await prisma.school.findUnique({
      where: {
        id,
      },
    });

    return school;
  }

  async readOneByEmail(email) {
    const school = await prisma.school.findUnique({
      where: {
        email,
      },
    });

    return school;
  }

  async readMany() {
    const schools = await prisma.school.findMany();

    return schools;
  }

  async update(id, data) {
    const school = await prisma.school.update({
      where: {
        id,
      },
      data: {
        ...data,
      },
    });

    return school;
  }

  async delete(id) {
    const school = await prisma.school.delete({
      where: {
        id,
      },
    });

    return school;
  }
}

module.exports = School;
