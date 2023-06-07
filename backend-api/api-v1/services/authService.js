/**
 * @module authService
 */
const jwt = require("jsonwebtoken");
const userDAL = require("../DAL/userDAL");

/* Admin Login */
exports.login = async (email, password) => {
  return await userDAL.findUserByCredentials(email, password);
};

exports.generateTokens = (userId) => {
  //creating a access token
  const accessToken = jwt.sign(
    {
      userId,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: "5m",
    }
  );

  // Creating refresh token
  const refreshToken = jwt.sign(
    {
      userId,
    },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: "10m" }
  );
  return { accessToken, refreshToken };
};
/* Admin Login */
