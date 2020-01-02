const Sequelize = require('sequelize');
const sequelize = require('../config/database');
const Model = Sequelize.Model;

class Author extends Model {}
Author.init({
  id: { type: Sequelize.INTEGER,autoIncrement:true,primaryKey: true},
  name: { type: Sequelize.TEXT, allowNull: false},
  address: { type: Sequelize.TEXT, defaultValue: "melen" },
}, { sequelize, modelName: 'Author',timestamps:false });

class Book extends Model {}
Book.init({
  id: { type: Sequelize.INTEGER, allowNull: false,primaryKey: true},
  title: { type: Sequelize.TEXT, allowNull: false},
}, { sequelize, modelName: 'Book',timestamps:false });

class Article extends Model {}
Article.init({
  id: { type: Sequelize.INTEGER, allowNull: false,primaryKey: true},
  name: Sequelize.STRING,
  address: Sequelize.TEXT
}, { sequelize, modelName: 'Article',timestamps:false });

Author.hasMany(Book);
Book.hasMany(Article);


module.exports = {
 Author,Book,Article
}