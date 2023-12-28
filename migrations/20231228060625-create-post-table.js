'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('posts', { 
      id: {
        allowNull:false, 
        autoIncrement: true, 
        primaryKey:true, 
        type:Sequelize.INTEGER 
      },
      user_id: {
        type:Sequelize.INTEGER,
        allowNull:false, 
      },
      content: {
        type: Sequelize.STRING, 
        allowNull:false
      },
    });
    await queryInterface.addConstraint('posts',{
      fields: ['user_id'],
      type: 'foreign key',
      name: 'post_ref_user',
      references: {table:'Users', field: 'id'},
      onDelete:'cascade',
      onUpdate: 'cascade',
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
