const route = require('express').Router();
const validateJWT = require('../auth/validateJWT');
const { UserController } = require('../controllers');
// const validateDisplayName = require('../middlewares/validateDisplayName');
// const validateEmail = require('../middlewares/validateEmail');
// const validateLogin = require('../middlewares/validateLogin');
// const validatePassword = require('../middlewares/validatePassword');
const userValidations = require('../middlewares/userValidations');
 
route.post('/', userValidations, UserController.createUser);
route.get('/', validateJWT, UserController.getAllUser);
route.get('/:id', validateJWT, UserController.getUserById);

module.exports = route;