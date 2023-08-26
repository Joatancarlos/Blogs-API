const messageRequired = { message: 'Some required fields are missing' };
const messageInvalid = { message: 'Invalid fields' };
const validateLogin = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json(messageRequired);
  if (email === '' || password === '') return res.status(400).json(messageInvalid);
  
  next();
};

module.exports = validateLogin;