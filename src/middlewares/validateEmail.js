const utilEmail = (email) => {
  const validRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return validRegex.test(email);
};

const messageInvalidEmail = { message: '"email" must be a valid email' };
const validateEmail = (req, res, next) => {
  const { email } = req.body;
  if (!utilEmail(email)) res.status(400).json(messageInvalidEmail);
  next();
};

module.exports = validateEmail;
