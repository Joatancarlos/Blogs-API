const route = require('express').Router();
const { LoginController } = require('../controllers');
const validateLogin = require('../middlewares/validateLogin');

route.post('/', validateLogin, LoginController.generateToken);

module.exports = route;