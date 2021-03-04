const router = require('express').Router();
const db = require('../models')
const bcrypt = require('bcrypt');


//CRUD routes for Users

const registers = [];


//Users page - Shows all user/ activities (Done)
router.get('/', (req, res) => {
    res.render('users',{title: 'Some Var'} )
});

//Login form page, re-directs to user-account page

router.get('/loginform', (req, res) =>{
    res.render('loginform', {title: 'Some Var'})
});


//
router.get('/register', (req, res) =>{
    res.render('register', {title: 'Some Var'})

});

//New User registration page (form)
router.post('/register', async (req, res) =>{
    try{
        // const salt = await bcrypt.genSalt(12)
        const hashedPasssword = await bcrypt.hash(req.body.password, 12);
        const newUser = {name: req.body.username, password: hashedPasssword, email: req.body.email};
        //push to db
        //render and redirect to dashboard
        registers.push(newUser);
        res.status(200).send();
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