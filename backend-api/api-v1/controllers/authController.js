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
  const { accessToken, refreshToken } = await authService.generateTokens(
    user._id
  );

  // Assigning refresh token in http-only cookie
  res.cookie("jwt", refreshToken, {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    maxAge: 10 * 60 * 1000, // 10 minutes
  });
  return res.status(200).json({ accessToken });
});
