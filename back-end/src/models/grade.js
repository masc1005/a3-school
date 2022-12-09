const prisma = require("../config/database");

class Grade {
  async create(data) {
    const { schoolId, moduleId, grade, userId } = data;

    const grades = await prisma.grade.create({
      data: {
        schoolId,
        moduleId,
        userId,
        name: `grade-${userId}.${+Date.now()}`,
        grade,
      },
    });
    return grades;
  }

  async readOne(schoolId, moduleId, userId) {
    const grades = await prisma.grade.findUnique({
      where: {
        schoolId_moduleId_userId: {
          schoolId: parseInt(schoolId),
          moduleId: parseInt(moduleId),
          userId: parseInt(userId),
        },
      },
    });
    return grades;
  }

  async readMany() {
    const grades = await prisma.grade.findMany();
    return grades;
  }

  async update(id, data) {
    const grades = await prisma.grade.update({
      where: {
        id,
      },
      data: {
        ...data,
      },
    });
    return grades;
  }

  async delete(id) {
    const grades = await prisma.grade.delete({
      where: {
        id: parseInt(id),
      },
    });
    return grades;
  }
}

module.exports = Grade;
