const express = require("express");
const router = express.Router();
const { createEmployee } = require("../controllers/employeeController");
const { getEmployee } = require("../controllers/employeeController");
const { getEmployees } = require("../controllers/employeeController");
const { updateEmployee } = require("../controllers/employeeController");
const { deleteEmployee } = require("../controllers/employeeController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/employees",authMiddleware, createEmployee);
router.get("/employees",authMiddleware, getEmployees);
router.get("/employees/:id",authMiddleware, getEmployee);
router.patch("/employees/:id",authMiddleware, updateEmployee);
router.delete("/employees/:id",authMiddleware, deleteEmployee);


module.exports = router;