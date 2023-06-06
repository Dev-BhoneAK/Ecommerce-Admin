/**
 * @module authService
 */
const jwt = require("jsonwebtoken");
const userDAL = require("../DAL/userDAL");

/* Admin Login */
exports.login = async (email, password) => {
  return await userDAL.findUserByCredentials(email, password);
};

exports.generateTokens = (user) => {
  //creating a access token
  const accessToken = jwt.sign(
    {
      username: userCredentials.username,
      email: userCredentials.email,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: "5m",
    }
  );

  // Creating refresh token
  const refreshToken = jwt.sign(
    {
      username: userCredentials.username,
    },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: "10m" }
  );

  // Assigning refresh token in http-only cookie
  res.cookie("jwt", refreshToken, {
    httpOnly: true,
    sameSite: "None",
    secure: true,
    maxAge: 24 * 60 * 60 * 1000,
  });
  return res.json({ accessToken });
};
/* Admin Login */
