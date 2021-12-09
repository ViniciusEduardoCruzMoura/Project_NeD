'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('DigitalAlbums', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      cpf: {
        type: Sequelize.STRING
      },
      phone_whatsapp: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      birthday: {
        type: Sequelize.DATE
      },
      photo_title: {
        type: Sequelize.STRING
      },
      photographer_name: {
        type: Sequelize.STRING
      },
      photo_name: {
        type: Sequelize.STRING
      },
      responsable_name: {
        type: Sequelize.STRING
      },
      responsable_cpf: {
        type: Sequelize.STRING
      },
      authorization_date: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('DigitalAlbums');
  }
};