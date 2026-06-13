const supabase = require("../config/db");

const createEmployee = async (data) => {
  const { data: employee, error } = await supabase
    .from("employees")
    .insert([{ ...data, updatedAt: new Date() }])
    .select()
    .single();
  if (error) throw error;
  return employee;
};

const getAllEmployees = async (query = {}) => {
  const { page, limit, department, firstName } = query;

  let q = supabase.from("employees").select("*");

  if (department) q = q.eq("department", department);
  if (firstName) q = q.ilike("firstName", `%${firstName}%`);

  if (page && limit) {
    const from = (page - 1) * limit;
    const to = from + Number(limit) - 1;
    q = q.range(from, to);
  }

  const { data, error } = await q;
  if (error) throw error;
  return data;
};

const getEmployeeById = async (id) => {
  const { data, error } = await supabase
    .from("employees")
    .select("*")
    .eq("id", id)
    .maybeSingle();
  if (error) throw error;
  return data;
};

const updateEmployee = async (id, data) => {
  const { data: employee, error } = await supabase
    .from("employees")
    .update({ ...data, updatedAt: new Date() })
    .eq("id", id)
    .select()
    .single();
  if (error) throw error;
  return employee;
};

const deleteEmployee = async (id) => {
  const { data, error } = await supabase
    .from("employees")
    .delete()
    .eq("id", id)
    .select()
    .maybeSingle();
  if (error) throw error;
  return data;
};

module.exports = {
  createEmployee,
  getAllEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
};
