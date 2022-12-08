const prisma = require("../config/database");

const { generateHash } = require("./hash");

async function createSchool() {
  const school = await prisma.school.create({
    data: {
      name: "School 1",
      address: "Address 1",
      cnpj: "00000000000000",
      phone: "00000000000",
      email: "school1@example.com",
    },
  });

  return school;
}

async function createClass(schoolId, moduleId) {
  const schoolClass = await prisma.class.create({
    data: {
      name: "Class 1",
      School: {
        connect: {
          id: schoolId,
        },
      },
      Module: {
        connect: {
          id: moduleId,
        },
      },
    },
  });

  return schoolClass;
}

async function createModule(schoolId) {
  const module = await prisma.module.create({
    data: {
      name: "Module 1",
      schoolId,
    },
  });

  return module;
}

async function createAdmin() {
  const admin = await prisma.user.create({
    data: {
      email: "admin@example.com",
      name: "Admin",
      cpf: "00000000000",
      academic: true,
      role: "ADMIN",
      password: await generateHash("admin"),
    },
  });

  return admin;
}

module.exports = {
  createSchool,
  createClass,
  createModule,
  createAdmin,
};
