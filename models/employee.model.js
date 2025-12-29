const mongoose = require("mongoose");
const employeeSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String },
  department: { type: String, required: true },
  salary: { type: Number, required: true },
  status: { type: String,enum: ["ACTIVE","INACTIVE"], default: "ACTIVE" },
},
 { timestamps:true }
);

module.exports = mongoose.model("Employee", employeeSchema);

