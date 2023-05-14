function errorHandler(err, req, res, next) {
  switch (err.name) {
    case "ValidationError":
      const errors = Object.values(err.errors).map((error) => error.message);
      res.status(400).json({ message: "Validation Error", errors });
      break;
    case "UnauthorizedError":
      res.status(401).json({ message: "Unauthorized Access" });
      break;
    default:
      res.status(500).json({ message: "Internal Server Error" });
      break;
  }
}

 module.exports = {errorHandler}