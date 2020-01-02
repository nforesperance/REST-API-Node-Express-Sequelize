const Sequelize = require('sequelize');

const sequelize = new Sequelize('education', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });
module.exports =sequelize