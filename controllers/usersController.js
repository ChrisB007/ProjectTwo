const router = require('express').Router();
const db = require('../models')
const bcrypt = require('bcrypt');


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
        let usererr = [];
        const newUser = {username: req.body.username, password: req.body.password, password2: req.body.password2, email: req.body.email};
        

        // form validation
        if(!newUser.username || !newUser.password || !newUser.email){
            usererr.push({message: "Please fill out required fields"});
            console.log(usererr)
        } else if(newUser.password.length < 6){
            usererr.push({message: "Password should be at least 6 characters"});
            console.log(usererr)
        } else if(newUser.password !== newUser.password2){
            usererr.push({message: "Password does not match. Please re-enter your password"});
            console.log(usererr)
        } else{
            console.log('success');
        }
        
        if(usererr.length > 0){
            res.render('register', {usererr});
        } else {
            //After validating form
            const hashedPassword = await bcrypt.hash(newUser.password, 12);
            console.log(hashedPassword);



        }

        console.log(newUser.username  + " " + newUser.password + " " + newUser.password2 + " "+ newUser.email);
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