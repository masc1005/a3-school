const { Router } = require("express");

const { authMiddleware } = require("./middleware/auth");

const { login } = require("./controllers/auth");
const StudentController = require("./controllers/student");
const ProfessorController = require("./controllers/professor");
const ModuleController = require("./controllers/module");
const ClassController = require("./controllers/class");
const GradeController = require("./controllers/grade");

const student = new StudentController();
const professor = new ProfessorController();
const moduleController = new ModuleController();
const classController = new ClassController();
const grade = new GradeController();

const router = Router();

// hello world
router.get("/", (req, res) => {
  res.send({ message: "Hello World!" });
});

// Auth
router.post("/login", login);

router.use(authMiddleware);
// Student
router.post("/student", student.create);
router.get("/student/:id", student.readOne);
router.get("/student", student.readMany);
router.put("/student/:id", student.update);
router.delete("/student/:id", student.delete);

// Professor
router.post("/professor", professor.create);
router.get("/professor/:id", professor.readOne);
router.get("/professor", professor.readMany);
router.put("/professor/:id", professor.update);
router.delete("/professor/:id", professor.delete);

// Module
router.post("/module", moduleController.create);
router.get("/module/:id", moduleController.readOne);
router.get("/module", moduleController.readMany);
router.put("/modules/:id", moduleController.update);
router.delete("/module/:id", moduleController.delete);

// Class
router.post("/class", classController.create);
router.get("/class/:id", classController.readOne);
router.get("/class", classController.readMany);
router.put("/class/:id", classController.update);
router.delete("/class/:id", classController.delete);

// Grade
router.post("/grade", grade.create);
router.get("/grade/:id", grade.readOne);
router.get("/grade", grade.readMany);
router.put("/grade/:id", grade.update);
router.delete("/grade/:id", grade.delete);

module.exports = router;
