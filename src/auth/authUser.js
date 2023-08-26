const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

// const authUser = (req, res, next) => {
//   const token = req.headers.authorization;
//   if (!token) return res.status(401).json({ message: 'missing auth token' });
//   try {
//     const decoded = jwt.verify(token, secret);
//     req.user = decoded;
//     next();
//   } catch (err) {
//     return res.status(401).json({ message: 'jwt malformed' });
//   }
// };
const createToken = (data) => {
  const token = jwt.sign(data, secret, jwtConfig);
  return token;
};

module.exports = {
  // authUser,
  createToken,
};