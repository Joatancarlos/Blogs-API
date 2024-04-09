const validateLength = (password, length) => password.length >= length;

const invalidDisplayName = { message: '"displayName" length must be at least 8 characters long' };
const validateDisplayName = (req, res, next) => {
  const { displayName } = req.body;
  if (!displayName) {
    return res.status(400).json({ message: '"displayName" is required' });
  }
  if (!validateLength(displayName, 8)) {
    return res.status(400).json(invalidDisplayName);
  } 
    next();
};
 
module.exports = validateDisplayName;