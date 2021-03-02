const express = require('express');
const rowdyLogger = require('rowdy-logger');
const PORT  = process.env.PORT || 4040;
const app = express();
const axios = require('axios');


app.set('view engine', 'ejs');
const beginRowdy = rowdyLogger.begin(app);
app.use(express.urlencoded({extended: true}));


//Index - lists all movies

app.get('/', (req, res) => {
    var options = {
        method: 'GET',
        url: 'https://movie-database-imdb-alternative.p.rapidapi.com/',
        params: {s: 'Terminator', page: '1', r: 'json'},
        headers: {
          'x-rapidapi-key': 'b4aa387f42msh245cfa53de880c2p1b3beejsn5b5e0846814c',
          'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
          console.log(response.data);
      }).catch(function (error) {
          console.error(error);
      });

      res.send('hiya');

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
app.put('/user/edit', (req,res) => {

});

//Deletes user account, redirects to index page
app.delete('user/id', (req, res) =>{

});














app.listen(PORT, ()=> {
    console.log(`App is listening at port ${PORT}`);
    beginRowdy.print();
});






