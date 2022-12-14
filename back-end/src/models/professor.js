const prisma = require("../config/database");

class Professor {
  async create(data) {
    const { name, email, cpf, password, schoolId, moduleId, classId } = data;

    const professor = await prisma.user.create({
      data: {
        email,
        name,
        cpf,
        password,
        academic: true,
        role: "PROFESSOR",
        classId: parseInt(classId),
        moduleId: parseInt(moduleId),
        schoolId: parseInt(schoolId),
      },
    });
    return professor;
  }

  async readOne(id) {
    const professor = await prisma.user.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    return professor;
  }

  async readOneByEmail(email) {
    const professor = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    return professor;
  }

  async readMany(schoolId) {
    const professors = await prisma.user.findMany({
      where: {
        academic: true,
        role: "PROFESSOR",
        schoolId: parseInt(schoolId),
      },
    });
    return professors;
  }

  async update(id, data) {
    const professor = await prisma.user.update({
      where: {
        id: parseInt(id),
      },
      data: {
        ...data,
      },
    });
    return professor;
  }

  async delete(id) {
    const professor = await prisma.user.delete({
      where: {
        id: parseInt(id),
      },
    });
    return professor;
  }
}

module.exports = Professor;
