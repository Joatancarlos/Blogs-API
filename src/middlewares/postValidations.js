const postValidation = (req, res, next) => {
  const { title, content, categoryIds } = req.body;

  if (title === '' || content === '' || categoryIds === '') {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  next();
};

const postPutValidation = (req, res, next) => {
  const { title, content } = req.body;

  if (title === '' || content === '') {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  const { id } = req.params;
  const idUser = req.user.id;
  if (Number(id) !== idUser) return res.status(401).json({ message: 'Unauthorized user' });
  next();
};

module.exports = {
  postValidation,
  postPutValidation,
};