const prisma = require("../config/database");

class Module {
  async create(data) {
    const { name, schoolId } = data;
    const module = await prisma.module.create({
      data: {
        name,
        schoolId,
      },
    });

    return module;
  }

  async readOne(id) {
    const module = await prisma.module.findUnique({
      where: {
        id,
      },
    });

    return module;
  }

  async readMany(schoolId) {
    const modules = await prisma.module.findMany({
      where: {
        schoolId,
      },
    });

    return modules;
  }

  async update(id, data) {
    const { name } = data;
    const module = await prisma.module.update({
      where: {
        id,
      },
      data: {
        name,
      },
    });

    return module;
  }

  async delete(id) {
    const module = await prisma.module.delete({
      where: {
        id,
      },
    });

    return module;
  }
}

module.exports = Module;
