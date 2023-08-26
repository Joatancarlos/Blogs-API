const validateDisplayName = require('./validateDisplayName');
const validateEmail = require('./validateEmail');
const validateLogin = require('./validateLogin');
const validatePassword = require('./validatePassword');

module.exports = [
  validateDisplayName,
  validateEmail,
  validateLogin,
  validatePassword,
];