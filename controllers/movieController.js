const router = require('express').Router();
const axios =require('axios');
require('dotenv').config;

const TMDB_API_KEY = process.env.TMDB_API_KEY;



router.get('/search?:search', async (req, res)=>{
    try {
        let searchPhrase = req.query;
        // const movieAPI = await axios.get(`tmdbKey&query=${searchPhrase}`);
        // console.log(movieAPI.data);

    


        res.render('movies', {movieTitle: 'Some Var'})
        
    } catch (error) {
        console.log(error);
        
    }
})






module.exports = router;