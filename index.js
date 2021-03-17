const express = require('express');
const fetch = require("node-fetch");
const rowdyLogger = require('rowdy-logger');
const PORT  = process.env.PORT || 4040;
const app = express();
const axios = require('axios');
const methodOverride = require('method-override');
const cryptoJS = require('crypto-js');
const db = require('./models');
const { query } = require('express');
const jsScript = require('./');
require('dotenv').config();
const TMDB_API_KEY = process.env.TMDB_API_KEY;
const WEATHER_API = process.env.WEATHER_API;


const search_url = `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=`; //Search
const feature_url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${TMDB_API_KEY}&page=1`; //Feature
const image_url = `https://image.tmdb.org/t/p/w1280`;
const weather = `http://api.openweathermap.org/data/2.5/weather?&appid=${WEATHER_API}&q=Brooklyn`;


//Middleware
const beginRowdy = rowdyLogger.begin(app);
app.use(express.urlencoded({extended:true}));
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static("public"));
app.use(require('cookie-parser')());
app.use(methodOverride('_method'));
app.use(async (req, res, next) => {
    if (req.cookies.userId) {
        const decryptedId = cryptoJS.AES.decrypt(req.cookies.userId, process.env.COOKIE_SECRET).toString(cryptoJS.enc.Utf8)

        const user = await db.user.findOne({
            where: {
                id: decryptedId
            }
        })
        
        res.locals.user = user
    } else {
        res.locals.user = null
    }
    next()
})

app.use('/users', require('./controllers/usersController'));
app.use('/movies', require('./controllers/movieController'));

// let movieGridList = fetch(feature_url).then(resp => resp.json());
// let weatherForecast = fetch(weather).then(resp => resp.json());
// let imageGridList = fetch(image_url).then(resp => resp.json());


//Index - lists all movies
app.get('/', async(req, res) => {
    try {
        fetch(feature_url)
            .then((respose)=> {return respose.json()})
            .then((respose)=>{
                const gridData = respose.results; //Array
                const image_url = "https://image.tmdb.org/t/p/w200";
                const path = gridData.poster_path;
                

            res.render('index', {gridData: gridData});
            })
    
        }catch (error) {
    console.log(error)
        
    }
});

//Display Boxoff
app.get('/boxoff', (req,res)=>{
    res.render('boxoff', {title: 'boxoff'})
});

app.get('/dashboard', (req,res)=>{
    res.render('boxoff', {title: 'boxoff'})
});

app.get('/logout', (req,res)=>{
    res.clearCookie('userId');
    res.redirect('/');
});

app.get('/movies', async (req, res)=>{

    const searchTerm = search_url+req.query.search;

    try {
        fetch(searchTerm)
            .then((response)=> {
                return response.json()
            })
            .then((response)=>{
                const movieResult = response.results
                const image_url = "https://image.tmdb.org/t/p/w200";
                const path = movieResult.poster_path;

                res.render('movies', {movieResult: movieResult})
            })
    
        }catch (error) {
            console.log(error)      
    }
})


//PORT
app.listen(PORT, ()=> {
    console.log(`App is listening at port ${PORT}`);
    beginRowdy.print();
});