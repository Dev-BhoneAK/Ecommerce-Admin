/**
 * @module userService
 */
const userDAL = require('../DAL/userDAL');

exports.getAllUsers = async () => {
    const users = await userDAL.findAllUsers();
    return users;
};

exports.getUser =  async (userId) => {
    const users = await userDAL.findUserById(userId);
    return users;
};

exports.createUser = async (user) => {
    return await userDAL.createUser(user);;
}

exports.updateUser = async (userId, user) => {
    return await userDAL.updateUser(userId, user);
}

exports.deleteUser = async (userId) => {
    return await userDAL.deleteUser(userId);
}