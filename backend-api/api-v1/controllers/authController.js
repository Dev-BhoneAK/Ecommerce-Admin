/**
 * @module authController
 */
const authService = require("../services/authService");
const asyncHandler = require("express-async-handler");

exports.login = asyncHandler(async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const user = await authService.login(email, password);
  if (!user) {
    res.status(404);
    throw new Error("Invalid credentials");
  }

  
  res.status(200).json(user);
});
