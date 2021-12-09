'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DigitalAlbum extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  DigitalAlbum.init({
    name: DataTypes.STRING,
    cpf: DataTypes.STRING,
    phone_whatsapp: DataTypes.STRING,
    email: DataTypes.STRING,
    state: DataTypes.STRING,
    city: DataTypes.STRING,
    birthday: DataTypes.DATE,
    photo_title: DataTypes.STRING,
    photographer_name: DataTypes.STRING,
    photo_name: DataTypes.STRING,
    responsable_name: DataTypes.STRING,
    responsable_cpf: DataTypes.STRING,
    authorization_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'DigitalAlbum',
  });
  return DigitalAlbum;
};