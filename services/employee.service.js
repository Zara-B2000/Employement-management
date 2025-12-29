const Employee = require("../models/employee.model");

const createEmployee = (data) => Employee.create(data);
const getAllEmployees = () => Employee.find();
const getEmployeeById = (id) => Employee.findById(id);
const updateEmployee = (id, data) =>
  Employee.findByIdAndUpdate(id, data, { new: true });
const deleteEmployee = (id) => Employee.findByIdAndDelete(id);

module.exports = {
  createEmployee,
  getAllEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
};
