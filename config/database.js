const Sequelize = require('sequelize');

// for sqlite
module.exports = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite'
  });

// for mysql
// module.exports = new Sequelize('database', 'username', 'password', {
//     host: 'localhost',
//     dialect: 'mysql'
//   });

