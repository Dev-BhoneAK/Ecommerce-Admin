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
    return res.status(401).json({ message: "Invalid Credentials" });
    // res.status(401);
    // throw new Error("Invalid Credentials");
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
  res.json(accessToken);
});
