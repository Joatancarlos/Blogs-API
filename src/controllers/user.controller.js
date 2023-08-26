const { userService } = require('../services');

const createUser = async (req, res) => {
  const { status, data } = await userService.createUser(req.body);
  return res.status(status).json(data);
};

const getAllUser = async (req, res) => {
  const { status, data } = await userService.getAllUser();
  return res.status(status).json(data);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await userService.getUserById(id);
  return res.status(status).json(data);
};

module.exports = {
  createUser,
  getAllUser,
  getUserById,
};