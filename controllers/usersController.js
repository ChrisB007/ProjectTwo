const router = require('express').Router();
const db = require('../models')
const bcrypt = require('bcrypt');
const { Model } = require('sequelize');
const crypto = require('crypto-js');
require('dotenv').config();



//Middleware


//CRUD routes for Users
//Users page - Shows all user/ activities (Done)
router.get('/', (req, res) => {
    res.render('users',{title: 'Some Var'} )
});

//Login form page, re-directs to user-account page

router.get('/loginform', (req, res) =>{
    res.render('loginform', {title: 'Some Var'})
});

router.get('/savedmovies', (req, res) =>{
    res.render('movie', {title: 'Some Var'})
});

router.post('/loginform', async (req, res) =>{
    try {
        const user = await db.user.findOne({
            where: { email: req.body.email}
        })

        if(user && bcrypt.compareSync(req.body.password, user.password)) {
            const encryptedId = crypto.AES.encrypt(user.id.toString(), process.env.COOKIE_SECRET).toString()
            res.cookie('userId', encryptedId)
            res.redirect('/dashboard')
        } else {
            res.render('loginform');
        }

    } catch (err) {
        console.log(err)
        res.render('loginform', { errors: "Invalid email/password" })
    }
});

//
router.get('/register', (req, res) =>{
    res.render('register', {title: 'Some Var'})

});

//New User registration page (form)
router.post('/register', async (req, res) =>{
    try{
        const hashedPassword = bcrypt.hashSync(req.body.password, 12);

        if (req.body.username && req.body.password && req.body.email){
            const user = await db.user.create({
                username : req.body.username,
                password : hashedPassword,
                email: req.body.email
            });

            const encryptedId = crypto.AES.encrypt(user.id.toString(), process.env.COOKIE_SECRET).toString()
            res.cookie('userId', encryptedId)
            res.redirect('/dashboard');
            
        } else {
            res.redirect('back');
        }

    } catch(err){

        console.log(err);
        res.status(500).send();
    }

});

//Show information about one user
router.get('/:id', (req, res) => {

});

// Show edit page for user
router.get('/:id/edit', (req, res) =>{

});

//Updates user, and redirects somewhere
router.put('/:id', (req,res) => {

});

//Deletes user account, redirects to index page
router.delete('/:id', (req, res) =>{

});



module.exports = router;