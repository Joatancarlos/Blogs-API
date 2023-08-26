'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('posts_categories', {
      post_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
          model: 'blog_posts', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      category_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
          model: 'categories', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
     })
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('posts_categories');
  }
};
