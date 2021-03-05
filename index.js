const express = require('express');
const rowdyLogger = require('rowdy-logger');
const PORT  = process.env.PORT || 4040;
const app = express();
const axios = require('axios');
const methodOverride = require('method-override');
const crypto = require('crypto-js');
require('dotenv').config();



//Middleware
app.use(express.urlencoded({extended:true}));
app.set('view engine', 'ejs');
const beginRowdy = rowdyLogger.begin(app);
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static("public"));
app.use(require('cookie-parser')());
app.use(methodOverride('_method'));

app.use('/users', require('./controllers/usersController'));


//Index - lists all movies
app.get('/', (req, res) => {
      res.render('index', {title: 'Hello'});

});

//Display Boxoff
app.get('/boxoff', (req,res)=>{
    res.render('boxoff', {title: 'boxoff'})
});




//PORT
app.listen(PORT, ()=> {
    console.log(`App is listening at port ${PORT}`);
    beginRowdy.print();
});






