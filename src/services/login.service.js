const { createToken } = require('../auth/authUser');
const { User } = require('../models');

const generateToken = async (email, password) => {
  try {
    const findUser = await User.findOne({
      where: { email, password },
    });

    if (!findUser) return { status: 400, data: { message: 'Invalid fields' } };

    const { password: _, ...userWithoutPassword } = findUser.dataValues;
    const token = createToken(userWithoutPassword);

    return { status: 200, data: { token } };
  } catch (error) {
    return { status: 400, data: { message: 'Erro ao encontrar o usuário' } };
  }
};

module.exports = {
  generateToken,
};