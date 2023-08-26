const { loginService } = require('../services');

const generateToken = async (req, res) => {
  const { email, password } = req.body;
  const { status, data } = await loginService.generateToken(email, password);
  return res.status(status).json(data);
};

module.exports = {
  generateToken,
};