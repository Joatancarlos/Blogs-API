const { Category } = require('../models');

const createCategory = async ({ name }) => {
  const { id } = await Category.create({ name });
  return { status: 201, data: { id, name } };
};
const getAllCategories = async () => {
  const categories = await Category.findAll();
  return { status: 200, data: categories };
};

module.exports = {
  createCategory,
  getAllCategories,
};