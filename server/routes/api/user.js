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
    const {Firstname, Lastname, Email, Phonenumber, Username, Password} = req.body.users
    const newUser = new User({
        Firstname,
        Lastname,
        Email,
        Phonenumber,
        Username,
        Password
    });
    newUser.Password = newUser.generateHash(Password);
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