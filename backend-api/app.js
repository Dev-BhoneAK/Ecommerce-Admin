require("dotenv").config();
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const logger = require("morgan");

const {
  notFound,
  errorHandler,
} = require("./api-v1/middleware/errorHandlerMiddleware");
const database = require("./api-v1/config/database");
const adminRouter = require("./api-v1/routes/admin");
var usersRouter = require("./api-v1/routes/users");
// connect to database
database.connect();

const app = express();

app.use(cors({ origin: "http://localhost:8888", credentials: true }));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/public", express.static(path.join(__dirname, "public")));

app.use("/api/v1/admin", adminRouter);
app.use("/users", usersRouter);

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  console.log("Err ", err);
  res.status(err.status || 500);
  res.json({
    status: "failure",
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
});
// app.use(notFound);
// app.use(errorHandler);

module.exports = app;
