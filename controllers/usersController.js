const router = require('express').Router();
const db = require('../models')
const bcrypt = require('bcrypt');
const session = require('express-session');
const flash = require('express-flash');


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


//
router.get('/register', (req, res) =>{
    res.render('register', {title: 'Some Var'})

});

//New User registration page (form)
router.post('/register', async (req, res) =>{
    try{
        let errors = [];
        
            const hashedPassword = await bcrypt.hash(req.body.password, 12, (err, hash)=>{
                const newUser = {
                    username: req.body.username,
                    password: hash,
                    email: req.body.email
                };

                if (newUser.username && newUser.password && newUser.email){
                    res.render('dashboard');
                } else {
                    errors.push({message: "Please fill out required fields"});
                    res.redirect('back');
                }
        });

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