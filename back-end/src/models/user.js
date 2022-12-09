const prisma = require("../config/database");

class User {
  async readOneByEmail(email) {
    const student = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    return student;
  }

  async readOne(id) {
    const student = await prisma.user.findUnique({
      where: {
        id,
      },
    });
    return student;
  }
}

module.exports = User;
