const { categoriesService } = require('../services');

const createCategory = async (req, res) => {
  const { status, data } = await categoriesService.createCategory(req.body);
  return res.status(status).json(data);
};

const getAllCategories = async (req, res) => {
  const { status, data } = await categoriesService.getAllCategories();
  return res.status(status).json(data);
};

module.exports = {
  createCategory,
  getAllCategories,
};