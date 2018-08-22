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

    if(!Firstname){
        return res.send({
            success: false,
            message: "Error: First Name cannot be blank."
        });
    }
    if(!Lastname){
        return res.send({
            success: false,
            message: "Error: Last Name cannot be blank."
        });
    }
    if(!Email){
        return res.send({
            success: false,
            message: "Error: Email cannot be blank."
        });
    }
    if(!Phonenumber){
        return res.send({
            success: false,
            message: "Error: Phone Number cannot be blank."
        });
    }

    if(!Username){
        return res.send({
            success: false,
            message: "Error: Username cannot be blank."
        });
    }

    if(!Password){
        return res.send({
            success: false,
            message: "Error: Password cannot be blank."
        });
    }

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