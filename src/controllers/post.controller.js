const { postService } = require('../services');

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { id } = req.user;

  const { status, data } = await postService.createPost(title, content, categoryIds, id);

  res.status(status).json(data);
};

const getAllPosts = async (_req, res) => {
  const { status, data } = await postService.getAllPosts();
  return res.status(status).json(data);
};

const getPostById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await postService.getPostById(id);
  return res.status(status).json(data);
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  const idUser = req.user.id;
  const { status, data } = await postService.updatePost(req.body, id, idUser);
  return res.status(status).json(data);
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
};