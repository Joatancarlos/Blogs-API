'use strict';

module.exports = {
  /**
   * 
   * @param {import('sequelize').Sequelize} Sequelize 
   */
  up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('blog_posts', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        title: {
          type: Sequelize.STRING,
        },
        content: {
          type: Sequelize.STRING,
        },
        user_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'users', // name of Target model
            key: 'id', // key in Target model that we're referencing
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        },
        published: {
          type: Sequelize.DATE,
        },
        updated: {
          type: Sequelize.DATE,
        },
      });
   
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('blog_posts');
  }
};
