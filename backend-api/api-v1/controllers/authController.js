/**
 * @module authController
 */
const jwt = require("jsonwebtoken");

const authService = require("../services/authService");
const asyncHandler = require("express-async-handler");

exports.login = asyncHandler(async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const user = await authService.login(email, password);
  if (!user) {
    res.status(401);
    throw new Error("Username or Password is incorrect");
  }

  const { accessToken, refreshToken } = await authService.generateTokens(
    user._id
  );

  // Assigning refresh token in http-only cookie
  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    sameSite: "Strict",
    secure: process.env.NODE_ENV === "production",
    maxAge: 100 * 60 * 1000, // 100 minutes
  });
  res.json(accessToken);
});

exports.refreshToken = asyncHandler(async (req, res, next) => {
  // Read JWT from the 'refreshToken' cookie
  const token = req.cookies.refreshToken;
  if (!token) {
    res.status(401);
    throw new Error("Not authorized as an admin");
  }

  jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) {
      console.log(err);
      res.status(401);
      throw new Error("Not authorized as an admin");
    }

    const userId = user.userId;
    const accessToken = jwt.sign(
      {
        userId,
      },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "1m",
      }
    );
    res.json(accessToken);
  });
});

exports.logout = asyncHandler(async (req, res, next) => {
  // Clearing the cookie
  res.clearCookie("refreshToken", { httpOnly: true });
  res.status(200).json({ message: "Logged out successfully" });
});
