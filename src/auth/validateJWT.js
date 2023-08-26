const jwt = require('jsonwebtoken');
// const { userService } = require('../services');

const secret = process.env.JWT_SECRET;

function extractToken(bearerToken) {
  return bearerToken.split(' ')[1];
}
const validateJWT = async (req, res, next) => {
  const bearerToken = req.header('Authorization');
  if (!bearerToken) {
    return res.status(401).json({ message: 'Token not found' });
  }
  const token = extractToken(bearerToken);
  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
    req.user = decoded;
    next();
  });
};

module.exports = validateJWT;