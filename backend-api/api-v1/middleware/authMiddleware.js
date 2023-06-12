const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// For consumer endpoints
exports.consumerAuth = asyncHandler(async (req, res, next) => {
  let token;

  // Read JWT from the 'jwt' cookie
  token = req.cookies.jwt;

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.userId).select("-password");

      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  } else {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

// For admin endpoints
exports.adminAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    res.status(401);
    throw new Error("Not authorized as an admin");
  }
  const token = authHeader.split(" ")[1];
  console.log("Token ", token);
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      console.log(err);
      res.status(401);
      throw new Error("Not authorized as an admin");
    }
    req.user = user.userId;
    next();
  });
};
