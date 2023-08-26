const route = require('express').Router();
const { CategoriesController } = require('../controllers');

const validateJWT = require('../auth/validateJWT');
const validateName = require('../middlewares/validateName');

route.post('/', validateJWT, validateName, CategoriesController.createCategory);
route.get('/', validateJWT, CategoriesController.getAllCategories);

module.exports = route;