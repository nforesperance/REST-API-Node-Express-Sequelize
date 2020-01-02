const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const models = require("../models/models")



const Book  = models.Book


// Author routes

// Get All Authors
// route author/all
router.get('/all/', (req, res) => 
  Book.findAll()
    .then(data => res.json(data))
    .catch(err => console.log(err)));

 
// Get get a particular author
// route author/:author_id
router.get('/:author_id', (req, res) => 
    Author.findAll({
      where: {
        author_id: req.params.author_id
      }
    })
    .then(data => res.json(data))
    .catch(err => console.log(err)));


// add a particular author
// route author/:author_id
router.post('/', (req, res) => {
  let { name, address} = req.body;
  Author.create({
    name,
    address
  })
    .then(data => res.json(data))
    .catch(err => console.log(err));
  });


// update a particular author
// route author/:author_id
router.post('/update/', (req, res) => {
    let { name, address,author_id} = req.body;
    Author.findOne({ where: {author_id: author_id} })
    .then(data1 => {
      if(data1 != null){
        Author.update({
          name: name,
          address: address,
        }, {
          where: {
            author_id:author_id
          }
        })
          .then(data =>res.json({ success: true }))
          .catch(err => console.log(err));
      }
      else{
       res.status(404).send({
          message: "404: No such data found"
      });  
      }
            
    })
    .catch(err =>{
      return res.status(500).send({
          message: "Error retrieving data"
      });                
      })
    })


// delete a particular author
// route author/:author_id
router.delete('/:author_id', (req, res) => {
  let { author_id} = req.params;
  Author.findOne({ where: {author_id: author_id} })
  .then(data1 => {
    if(data1 != null){
      Author.destroy({
        where: {
          author_id: author_id
        }
      })
        .then(data =>res.json({ success: true }))
        .catch(err => console.log(err));
    }
    else{
     res.status(404).send({
        message: "404: No such data found"
    });  
    }
          
  })
  .catch(err =>{
    return res.status(500).send({
        message: "Error retrieving data"
    });                
    })
  })

module.exports = router;