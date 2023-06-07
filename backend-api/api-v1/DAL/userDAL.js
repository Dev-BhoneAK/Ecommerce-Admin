const User = require("../models/userModel");

exports.findAllUsers = async () => {
  const users = await User.find();
  return users;
};

exports.findUserById = async (userId) => {
  const user = await User.findById(userId);
  return user;
};

exports.createUser = (user) => {
  const newUser = new User(user);
  return newUser.save();
};

exports.updateUser = async (userId, user) => {
  return await User.findByIdAndUpdate(userId, user);
};

exports.deleteUser = async (userId) => {
  return await User.findByIdAndDelete(userId);
};

/* Admin Login */
exports.findUserByCredentials = async (email, password) => {
  return await User.findOne({ email });
};
/* Admin Login */
