const validateLength = (password, length) => password.length >= length;

const invalidPassword = { message: '"password" length must be at least 6 characters long' };
const validatePassword = (req, res, next) => {
  const { password } = req.body;
  if (!validateLength(password, 6)) res.status(400).json(invalidPassword);
  next();
};

module.exports = validatePassword;