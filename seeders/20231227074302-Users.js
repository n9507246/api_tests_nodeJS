'use strict';

const {User, Post} = require('../models')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up () {
    const dataUser = await User.create({ name:"First test user"})
    await Post.create({
      user_id: dataUser.id, content: 'asdasdsadasdasdas'
    })

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    //для отката сида можно использовать npx sequelize-cli db:seed:undo
    await queryInterface.bulkDelete('users', null, {})
  }
};
