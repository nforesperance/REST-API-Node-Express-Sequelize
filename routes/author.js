const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const models = require("../models/models")



const Author  = models.Author


// Author routes

// Get All Authors
// route author/all
router.get('/all/', (req, res) => 
  Author.findAll()
    .then(data => res.json(data))
    .catch(err => console.log(err)));

 
// Get get a particular author
// route author/:id
router.get('/:id', (req, res) => 
    Author.findAll({
      where: {
        id: req.params.id
      }
    })
    .then(data => res.json(data))
    .catch(err => console.log(err)));


// add a particular author
// route author/:id
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
// route author/:id
router.post('/update/', (req, res) => {
    let { name, address,id} = req.body;
    Author.findOne({ where: {id: id} })
    .then(data1 => {
      if(data1 != null){
        Author.update({
          name: name,
          address: address,
        }, {
          where: {
            id:id
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
// route author/:id
router.delete('/:id', (req, res) => {
  let { id} = req.params;
  Author.findOne({ where: {id: id} })
  .then(data1 => {
    if(data1 != null){
      Author.destroy({
        where: {
          id: id
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