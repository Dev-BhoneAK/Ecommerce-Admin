/**
 * @module userController
 */
const userService = require('../services/userService');
const asyncHandler = require('express-async-handler');

exports.getAllUsers =  async (req, res) => {
    const users = await userService.getAllUsers();
    if(!users){
        res.status(404);
        throw new Error('Users Not Found');
    }
    res.status(200).json(users);
};

exports.getUser = asyncHandler (async (req, res) => {
    const userId = req.params.userId;
    const user = await userService.getUser(userId);
    if(!user){
        res.status(404);
        throw new Error('User Not Found');
    }
    res.status(200).json(user);
});

exports.createUser = asyncHandler ( async (req, res) => {
    const user = req.body;
    user.logo = req.file.path;
    console.log('User Body ', user);
    const newUser = await userService.createUser(user);
    if(!newUser){
        res.status(400);
        throw new Error('Cannot Create New User. Please check Input Fields');
    }
    res.status(200).json(newUser);
});

exports.updateUser = asyncHandler (async (req, res) => {
    const userId = req.params.userId;
    const user = req.body;
    user.logo = req.file.path;
    const updatedUser = await userService.updateUser(userId, user);
    if(!updatedUser){
        res.status(400);
        throw new Error('Cannot Update User. Please check Input Fields');
    }
    res.status(200).json(updatedUser);
});

exports.deleteUser = asyncHandler(async (req, res) => {
    const userId = req.params.userId;
    const deletedUser = await userService.deleteUser(userId);
    if(!deletedUser){
        res.status(400);
        throw new Error('Removing user is not successful. Please Try again.');
    }
    res.status(200).json(deletedUser);
});