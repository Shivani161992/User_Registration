const Sequelize = require('Sequelize');

const sequelize = require('../util/database');

const User = sequelize.define('tbl_user', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey:true,
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false
      }

});

module.exports= User;

