const express = require('express')
const router = express.Router();

//FutsalCourts model

const FutsalCourts = require('../../../models/Futsal-Courts');

//Get Futsal Courts from api/futsalCourts

router.get('/',(req,res)=>{
    FutsalCourts.find()
        .then(FutsalCourts=> res.json(FutsalCourts))
})

//Post Futsal Courts to api/futsalcourts

router.post('/',(req,res)=>{
    const newFutsalCourts = new FutsalCourts({
        Name: req.body.Name,
        Address: req.body.Address,
        ContactNo: req.body.ContactNo,
        Email: req.body.Email,
    });

    newFutsalCourts.save()
    .then(FutsalCourts =>res.json(FutsalCourts));
})

module.exports = router