const service = require("../services/employee.service");

exports.createEmployee = async (req, res, next) => {
  try {
    const employee = await service.createEmployee(req.body);
    res.status(201).json(employee);
  } catch (err) {
    next(err);
  }
};

exports.getEmployees = async (req, res, next) => {
  try {
    const employee = await service.getAllEmployees(req.query);
    res.json(employee);
  } catch (err) {
    next(err);
  }
};
exports.getEmployee = async (req, res, next) => {
  try {
    const employee = await service.getEmployeeById(req.params.id);
    res.json(employee);
  } catch (err) {
    next(err);
  }
};

exports.updateEmployee = async (req, res, next) => {
  try {
    const employee = await service.updateEmployee(req.params.id, req.body);
    res.json(employee);
  } catch (err) {
    next(err);
  }
};

exports.deleteEmployee = async (req, res, next) => {
  try {
    await service.deleteEmployee(req.params.id);
    res.json({ message: "Employee deleted" });
  } catch (err) {
    next(err);
  }
};
