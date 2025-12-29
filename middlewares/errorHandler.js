module.exports = (err, req, res, next) => {
    if (err.name === "ValidationError") {
    return res.status(400).json({
      message: "Validation Error",
      errors: Object.values(err.errors).map((e) => e.message),
    });
  }
  if (err.name === "CastError") {
    return res.status(400).json({
      message: `Invalid ${err.path}: ${err.value}`,
    });
  }
    if (err.code && err.code === 11000) {
      return res.status(400).json({
        message: "Duplicate value error",
        fields: err.keyValue,
      });
    }
    res.status(500).json({
        message: err.message || "server Error"
    });
};

