const Sequelize = require('sequelize');

// Mode of production
const Dev = true;

// Database connection
const sequelize = new Sequelize('education', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });
module.exports = {
  sequelize:sequelize,
  Dev:Dev
}