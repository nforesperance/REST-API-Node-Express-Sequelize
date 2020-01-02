const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const sequelize = require('./config').sequelize;
const Dev = require('./config').Dev;



const app = express();
// Bodyparser Middleware
app.use(express.json());


// Database
const db = require('./config').sequelize;

// synchronizing Models with Database
if(Dev){
  sequelize.sync({alter: true});
}

// Test DB
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err))

// Gig routes
app.use('/api/author/', require('./routes/author'));
app.use('/api/book', require('./routes/book'));
app.use('/api/article', require('./routes/article'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));  
