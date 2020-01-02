const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


const app = express();
// Bodyparser Middleware
app.use(express.json());


// Database
const db = require('./config/database');
// Test DB
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err))

// Gig routes
app.use('/api', require('./routes/routes'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));  