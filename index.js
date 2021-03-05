const express = require('express');
const rowdyLogger = require('rowdy-logger');
const PORT  = process.env.PORT || 4040;
const app = express();
const axios = require('axios');
const methodOverride = require('method-override');
const cryptoJS = require('crypto-js');
const db = require('./models');
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
app.use(async (req, res, next) => {
    if (req.cookies.userId) {
        const decryptedId = cryptoJS.AES.decrypt(req.cookies.userId, process.env.COOKIE_SECRET).toString(cryptoJS.enc.Utf8)
        
        // console.log(decryptedId);
        // await db.user.findByPk(decryptedId)
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


//Index - lists all movies
app.get('/', (req, res) => {
      res.render('index', {title: 'Hello'});

});

//Display Boxoff
app.get('/boxoff', (req,res)=>{
    res.render('boxoff', {title: 'boxoff'})
});

app.get('/dashboard', (req,res)=>{
    res.render('boxoff', {title: 'boxoff'})
});

app.get('/logout', (req,res)=>{
    res.redirect('/');
});




//PORT
app.listen(PORT, ()=> {
    console.log(`App is listening at port ${PORT}`);
    beginRowdy.print();
});






