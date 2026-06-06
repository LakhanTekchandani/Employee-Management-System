        const Employee = require("../models/Employee");

        const createEmployee = async (req, res) => {
           try{
               const employee = await Employee.create(req.body);
               res.status(201).json({
                     message: "Employee created successfully",
                    employee:employee
               });
           }
           catch(error){
               res.status(400).json({ error: error.message });
           }
        };

        

        module.exports = {
            createEmployee
        };
