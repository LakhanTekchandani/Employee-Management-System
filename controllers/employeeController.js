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
        const getEmployees = async (req, res)=>{
            try{
                const employees = await Employee.find();
                res.status(200).json({
                    message:"Employees fetched succesfully",
                    employees:employees
                })
            }
            catch(error){
                res.status(400).json({ error: error.message });
            }
        }
         const getEmployee = async (req, res)=>{
            try{
                const employee = await Employee.findById(req.params.id);
                res.status(200).json({
                    message:"Employee fetched succesfully",
                    employee:employee
                })
            }
            catch(error){
                res.status(400).json({ error: error.message });
            }
        }
        const updateEmployee= async (req,res)=>{
            try{
                const empolyee = await Employee.findByIdAndUpdate(req.params.id,req.body,{new:true});
                res.status(200).json({
                    message:"Employee updated succesfully",
                    employee:empolyee
                })
            }
            catch(error){
                res.status(400).json({ error: error.message });
            }
        }
        const deleteEmployee= async (req,res)=>{
            try{
               const employee =await Employee.findByIdAndDelete(req.params.id);
               res.status(200).json({
                message:"Employee deleted succesfully",
                employee:employee
               })
                
            }
            catch(error){
                res.status(400).json({ error: error.message });
            }
        }
        

        module.exports = {
            createEmployee,
            getEmployees,
            getEmployee,
            updateEmployee,
            deleteEmployee
        };
