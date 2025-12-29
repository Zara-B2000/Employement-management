const Employee = require("../models/employee.model");

const createEmployee = (data) => Employee.create(data);
const getAllEmployees = async (query = {}) => {
  const { page, limit, department, firstName } = query;

  const filter = {};
  if (department) filter.department = department;
  if (firstName) filter.firstName = new RegExp(firstName, "i");

  let queryExec = Employee.find(filter);
  if (page && limit) {
    queryExec = queryExec.skip((page - 1) * limit).limit(Number(limit));
  }

  return await queryExec;
};
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
