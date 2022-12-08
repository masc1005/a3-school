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
    const classes = await prisma.class.findUnique({
      where: {
        id,
      },
    });
    return classes;
  }

  async readMany() {
    const classes = await prisma.class.findMany();
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
        id,
      },
    });
    return classes;
  }
}

module.exports = Classes;
