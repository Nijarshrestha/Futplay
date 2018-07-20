const express = require('express');
const router = express.Router();

//User Model
const User =  require('../../../models/User');

//Get users from api/users
router.get('/',(req, res)=>{
    User.find()
        .then(Users=> res.json(Users))
})

//Post users to api/user
router.post('/', (req, res)=>{
    const newUser = new User({
        Firstname: req.body.Firstname,
        Lastname : req.body.Lastname,
        Email : req.body.Email,
        Phonenumber : req.body.Phonenumber,
        Username : req.body.Username,
        Password : req.body.Password
    });

    newUser.save()
    .then(Users => res.json(Users));
});


//Delete User from api/user
router.delete('/:id',(req,res)=>{
    User.findById(req.params.id)
        .then(Users => Users.remove()
        .then(()=> res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
});

module.exports = router;