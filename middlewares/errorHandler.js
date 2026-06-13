module.exports = (err, req, res, next) => {
  if (err.code === "23505") {
    return res.status(400).json({
      message: "Duplicate value error",
      details: err.details,
    });
  }

  if (err.code === "23502" || err.code === "22P02") {
    return res.status(400).json({
      message: "Validation Error",
      details: err.message,
    });
  }

  res.status(500).json({
    message: err.message || "server Error",
  });
};
