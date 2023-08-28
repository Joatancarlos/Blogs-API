const { Op } = require('sequelize');
const { BlogPost, PostCategory, User, Category } = require('../models');
const { getAllCategories } = require('./categories.service');

const createPost = async (title, content, categoryIds, userId) => {
  const { data } = await getAllCategories();
  const isCategory = categoryIds
  .every((categoryId) => data.some((category) => category.id === categoryId));
  if (!isCategory) {
    return { status: 400, data: { message: 'one or more "categoryIds" not found' } };
  }
  const { id } = await BlogPost.create({ title,
    content,
    userId,
    published: new Date(),
    updated: new Date(),
  });
  categoryIds.forEach((categoryId) => PostCategory.create({ postId: id, categoryId }));
  const newPosts = await BlogPost.findByPk(id);
  return { status: 201, data: newPosts };
};

const getAllPosts = async () => {
  const allPosts = await BlogPost.findAll(
    { include: [{
      model: User,
      as: 'user',
      attributes: { exclude: ['password'] },
    }, 
    {
      model: Category,
      as: 'categories',
      through: { attributes: [] },
    }] },
  );
  return { status: 200, data: allPosts };
};

const getPostById = async (id) => {
  const post = await BlogPost.findByPk(
    id,
    { include: [{
      model: User,
      as: 'user',
      attributes: { exclude: ['password'] },
    },
    {
      model: Category,
      as: 'categories',
      through: { attributes: [] },
    }] },
);
  if (!post) {
    return { status: 404, data: { message: 'Post does not exist' } };
  }
  return { status: 200, data: post };
};

const updatePost = async ({ title, content }, id, idUser) => {
  const post = await BlogPost.findByPk(id);
  if (!post) return { status: 404, data: { message: 'Post does not exist' } };
  if (post.userId !== idUser) return { status: 401, data: { message: 'Unauthorized user' } };
  await BlogPost.update({ title, content }, { where: { id } });
  const updatedPost = await BlogPost.findByPk(
    id,
    { include: [{
      model: User,
      as: 'user',
      attributes: { exclude: ['password'] },
    },
    {
      model: Category,
      as: 'categories',
      through: { attributes: [] },
    }] },
);
  return { status: 200, data: updatedPost };
};

const deletePost = async (id, idUser) => {
  const post = await BlogPost.findByPk(id);
  if (!post) return { status: 404, data: { message: 'Post does not exist' } };
  if (post.userId !== idUser) return { status: 401, data: { message: 'Unauthorized user' } };
  await BlogPost.destroy({ where: { id } });
  return { status: 204 };
};

const searchPosts = async (q) => {
  const posts = await BlogPost.findAll(
    { where: { [Op.or]: [
      { title: { [Op.like]: `%${q}%` } },
      { content: { [Op.like]: `%${q}%` } },
    ] },
    include: [{
      model: User,
      as: 'user',
      attributes: { exclude: ['password'] },
    },
    {
      model: Category,
      as: 'categories',
      through: { attributes: [] },
    }] },
  );
  return { status: 200, data: posts };
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
  searchPosts,
};