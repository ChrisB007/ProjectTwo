const router = require('express').Router();

//CRUD routes for Users

//Users page - Shows all user/ activities (Done)
router.get('/', (req, res) => {
    res.render('users',{title: 'Some Var'} )
});

router.get('/dashboard', (req,res)=>{
    res.render('dashboard', {title: 'Some Var'});
})

//Creates new user, re-directs to user-account page
router.get('/:new', (req, res) =>{
    res.render('loginform', {title: 'Some Var'})

});

//New User login page (form)
router.post('/:register', (req, res) =>{
    res.render('loginform', {title: 'Some Var'})
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