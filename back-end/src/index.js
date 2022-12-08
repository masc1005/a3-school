const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const prisma = require("./config/database");

const {
  createAdmin,
  createClass,
  createModule,
  createSchool,
} = require("./helpers/generations");

const router = require("./router");

const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(router);

app.listen(process.env.PORT, async () => {
  try {
    try {
      await prisma.$connect();
    } catch {
      console.log("Database connection error");
    }

    const admin = await createAdmin();
    const school = await createSchool();
    const module = await createModule(school.id);
    const classSchool = await createClass(school.id, module.id);

    console.log("Admin: ", admin);
    console.log("School: ", school);
    console.log("Module: ", module);
    console.log("Class: ", classSchool);
  } catch {
    console.log(`Server is listening on port ${process.env.PORT}`);
    console.log("Database connection success");
  }
});
