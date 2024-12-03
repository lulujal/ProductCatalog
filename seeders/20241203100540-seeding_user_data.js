'use strict';
const {hashPassword} = require('../helpers/bcrypt')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.bulkInsert("Users",[{
        email:"jalu@mail.com",
        password:hashPassword("adhi123"),
        createdAt:new Date(),
        updatedAt:new Date()
      }],{})
   },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
