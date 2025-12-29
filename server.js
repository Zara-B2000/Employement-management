const express = require("express");
const connectDB = require("./config/db");
const employeeRoutes = require("./routes/employee.routes");
const errorHandler = require("./middlewares/errorHandler");
const logger = require("./middlewares/logger");
const app = express();
connectDB();

app.use(express.json());

app.use(logger);

app.use("/employees", employeeRoutes);

app.use(errorHandler);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});