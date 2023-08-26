const { BlogPost, PostCategory } = require('../models');
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

module.exports = {
  createPost,
};