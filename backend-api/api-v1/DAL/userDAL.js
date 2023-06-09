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
  const user = await User.findOne({ email });
  if (user) {
    const isMatch = await user.comparePassword(password);
    console.log(isMatch);
    if (isMatch) {
      return user;
    }
    return null;
  }
  return null;
};
/* Admin Login */
