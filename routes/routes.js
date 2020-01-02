const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const models = require("../models/models")



const Author  = models.Author
const Book  = models.Book
const Article  = models.Article

// Author routes
// Get All Authors
// route author/all
router.get('/author/all/', (req, res) => 
  Author.findAll()
    .then(data => res.json(data))
    .catch(err => console.log(err)));

 // Author routes
// Get get a particular author
// route author/:author_id
router.get('/author/:author_id', (req, res) => 
    Author.findAll({
      where: {
        author_id: req.params.author_id
      }
    })
    .then(data => res.json(data))
    .catch(err => console.log(err)));
 // Author routes
// Get get a particular author
// route author/:author_id
router.post('/author/', (req, res) => {
  let { name, address} = req.body;
  Author.create({
    name,
    address
  })
    .then(data => res.json(data))
    .catch(err => console.log(err));
  });



// Book routes


// Article routes routes

module.exports = router;