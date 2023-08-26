const { createToken } = require('../auth/authUser');
const { User } = require('../models');

const createUser = async ({ displayName, email, password, image }) => {
    const [userFinded, created] = await User.findOrCreate({
      where: { email },
      defaults: { displayName, password, image: image || null },
    });

    if (!created) return { status: 409, data: { message: 'User already registered' } };

    const { password: _, ...userWithoutPassword } = userFinded.dataValues;
    const token = createToken(userWithoutPassword);

    return { status: 201, data: { token } };
};

const getAllUser = async () => {
  const user = await User.findAll({
    attributes: { exclude: ['password'] },
  });
  return { status: 200, data: user };
};

const getUserById = async (id) => {
  const user = await User.findByPk(id, {
    attributes: { exclude: ['password'] },
  });
  if (!user) return { status: 404, data: { message: 'User does not exist' } };
  return { status: 200, data: user };
};

module.exports = {
  createUser,
  getAllUser,
  getUserById,
};