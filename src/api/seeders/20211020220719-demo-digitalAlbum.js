'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('DigitalAlbums',
      [{
        name: 'Zefa Ferreira',
        cpf: "33345678933",
        phone_whatsapp: "981184444",
        email: "eabbbba@asd.com",
        state: "MS",
        city: "Campo Grande",
        birthday: "1985-05-05",
        photo_title: "DDASD",
        photographer_name: "raarrfhrth",
        photo_name: "1.jpg",
        responsable_name: "",
        responsable_cpf: "",
        authorization_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Joestar',
        cpf: "31145678911",
        phone_whatsapp: "982257789",
        email: "joestar@gmail.com",
        state: "MS",
        city: "Campo Grande",
        birthday: "1995-07-07",
        photo_title: "foto titulo",
        photographer_name: "fotografo nome",
        photo_name: "2.jpg",
        responsable_name: "",
        responsable_cpf: "",
        authorization_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      }
      ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
