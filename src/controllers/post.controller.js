const { postService } = require('../services');

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { id } = req.user;

  const { status, data } = await postService.createPost(title, content, categoryIds, id);

  res.status(status).json(data);
};

module.exports = {
  createPost,
};