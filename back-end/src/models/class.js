const prisma = require("../config/database");

class Classes {
  async create(data) {
    const { name, schoolId, moduleId } = data;

    const classes = await prisma.class.create({
      data: {
        name,
        schoolId,
        moduleId,
      },
    });
    return classes;
  }

  async readOne(id) {
    const classes = await prisma.class.findFirst({
      where: {
        id: parseInt(id),
      },
    });
    return classes;
  }

  async readMany() {
    const classes = await prisma.class.findMany({
      include: {
        School: true,
        Module: true,
      },
    });
    return classes;
  }

  async update(id, data) {
    const classes = await prisma.class.update({
      where: {
        id,
      },
      data: {
        ...data,
      },
    });
    return classes;
  }

  async delete(id) {
    const classes = await prisma.class.delete({
      where: {
        id: parseInt(id),
      },
    });
    return classes;
  }
}

module.exports = Classes;
