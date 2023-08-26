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

module.exports = {
  createUser,
};