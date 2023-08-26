const route = require('express').Router();
const { UserController } = require('../controllers');
// const validateDisplayName = require('../middlewares/validateDisplayName');
// const validateEmail = require('../middlewares/validateEmail');
// const validateLogin = require('../middlewares/validateLogin');
// const validatePassword = require('../middlewares/validatePassword');
const userValidations = require('../middlewares/userValidations');
 
route.post(
'/',
userValidations,
UserController.createUser,
);

module.exports = route;