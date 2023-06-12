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
    // return res.status(401).json({ message: "Invalid Credentials" });
    res.status(401);
    throw new Error("Invalid Credentials");
  }

  const { accessToken, refreshToken } = await authService.generateTokens(
    user._id
  );

  // Assigning refresh token in http-only cookie
  res.cookie("jwt", refreshToken, {
    httpOnly: true,
    sameSite: "Strict",
    secure: process.env.NODE_ENV === "production",
    maxAge: 10 * 60 * 1000, // 10 minutes
  });
  res.json(accessToken);
});

exports.refreshToken = asyncHandler(async (req, res, next) => {
  // Read JWT from the 'jwt' cookie
  console.log("Request Cookie ", req.cookies);
  const token = req.cookies.jwt;
  //   console.log("Refresh Token ", token);
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
    console.log("User Id ", userId);
    const accessToken = jwt.sign(
      {
        userId,
      },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "5m",
      }
    );
    console.log("New Access Token ", accessToken);
    res.json(accessToken);
  });
});
