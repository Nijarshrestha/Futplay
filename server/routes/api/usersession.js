const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');


//Usersession model

const User = require('../../../models/User')

router.post('/',(req, res, next)=>{
    User.find({Email: req.body.Email})
    .exec()
    .then(user =>{
        if(user.length <1){
            return res.status(401).json({
                message:"Auth Failed"
            })
        }
        bcrypt.compare(req.body.Password, user[0].Password,(err, result)=>{
            if(err){
                return res.status(401).json({
                    message:"Auth Failed"
                });
            }
            if(result){
                return res.status(200).json({
                    message: "Auth Successful"
                })  
            }
            res.status(401).json({
            message:"Auth Failed"
        });
    });
})
.catch(err=>{
    console.log(err);
    res.status(500).json({
        error:err
        })
    })
})

module.exports = router;    