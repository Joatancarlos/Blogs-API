const validateLength = (password, length) => password.length >= length;
const utilEmail = (email) => {
  const validRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return validRegex.test(email);
};

const invalidDisplayName = { message: '"displayName" length must be at least 8 characters long' };
const messageInvalidEmail = { message: '"email" must be a valid email' };
const messageRequired = { message: 'Some required fields are missing' };
const messageInvalid = { message: 'Invalid fields' };
const invalidPassword = { message: '"password" length must be at least 6 characters long' };

const validateDisplayName = (req, res, next) => {
  const { displayName } = req.body;
  if (!validateLength(displayName, 8)) return res.status(400).json(invalidDisplayName);
  next();
};

const validateEmail = (req, res, next) => {
  const { email } = req.body;
  if (!utilEmail(email)) return res.status(400).json(messageInvalidEmail);
  next();
};

const validateLogin = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json(messageRequired);
  if (email === '' || password === '') return res.status(400).json(messageInvalid);
  
  next();
};

const validatePassword = (req, res, next) => {
  const { password } = req.body;
  if (!validateLength(password, 6)) return res.status(400).json(invalidPassword);
  next();
};

module.exports = [
  validateDisplayName,
  validateEmail,
  validateLogin,
  validatePassword,
];