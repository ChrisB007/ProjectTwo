const express = require('express');
const rowdyLogger = require('rowdy-logger');
const PORT  = process.env.PORT || 4040;
const app = express();
const axios = require('axios');
const methodOverride = require('method-override');


app.use(express.urlencoded({extended:true}));
app.set('view engine', 'ejs');
const beginRowdy = rowdyLogger.begin(app);
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(methodOverride('_method'));


//Index - lists all movies
app.get('/', (req, res) => {
      res.render('index', {title: 'Hello'});

});

//Users page - Shows all user/ activities
app.get('/users', (req,res) => {
    console.log('hello');
});


//New User login page (form)
app.get('/users/new', (req, res) =>{

});

//Creates new user, re-directs to user-account page
app.post('/users', (req, res) =>{

});

//Show information about one user
app.get('/user/:id', (req, res) => {

});

// Show edit page for user
app.get('/user/:id/edit', (req, res) =>{

});

//Updates user, and redirects somewhere
app.put('/user/:id', (req,res) => {

});

//Deletes user account, redirects to index page
app.delete('user/:id', (req, res) =>{

});














app.listen(PORT, ()=> {
    console.log(`App is listening at port ${PORT}`);
    beginRowdy.print();
});






