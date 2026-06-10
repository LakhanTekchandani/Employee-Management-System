const express = require("express");
const router = express.Router();
const { createEmployee } = require("../controllers/employeeController");
const { getEmployee } = require("../controllers/employeeController");
const { getEmployees } = require("../controllers/employeeController");
const { updateEmployee } = require("../controllers/employeeController");
const { deleteEmployee } = require("../controllers/employeeController");

router.post("/employees", createEmployee);
router.get("/employees",getEmployees);
router.get("/employees/:id",getEmployee);
router.patch("/employees/:id",updateEmployee);
router.delete("/employees/:id",deleteEmployee);


module.exports = router;