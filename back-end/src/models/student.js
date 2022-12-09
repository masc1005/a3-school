const prisma = require("../config/database");

class Student {
  async create(data) {
    const { name, email, cpf, password, schoolId, classId } = data;

    const student = await prisma.user.create({
      data: {
        email,
        name,
        cpf,
        password,
        academic: false,
        role: "STUDENT",
        moduleId: 1,
        schoolId: parseInt(schoolId),
        Class: {
          connect: {
            id: parseInt(classId),
          },
        },
      },
    });
    return student;
  }

  async readByClass(classId) {
    const students = await prisma.user.findMany({
      where: {
        academic: false,
        role: "STUDENT",
        Class: {
          some: {
            id: parseInt(classId),
          },
        },
      },
    });
    return students;
  }

  async readOne(id) {
    const student = await prisma.user.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    return student;
  }

  async readOneByEmail(email) {
    const student = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    return student;
  }

  async update(id, data) {
    const student = await prisma.user.update({
      where: {
        id: parseInt(id),
      },
      data: {
        ...data,
      },
    });
    return student;
  }

  async updatePassword(id, data) {
    const { password } = data;

    const student = await prisma.user.update({
      where: {
        id: parseInt(id),
      },
      data: {
        password,
      },
    });
    return student;
  }

  async delete(id) {
    const student = await prisma.user.delete({
      where: {
        id: parseInt(id),
      },
    });
    return student;
  }
}

module.exports = Student;
