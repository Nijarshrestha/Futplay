const express = require('express');
const router = express.Router();

//Booking List Model
const BookingList = require('../../../models/bookinglist');

//Get Booking Time from api/bookinglist

router.get('/',(req,res)=>{
    BookingList.find()
            .then(BookingList=> res.json(BookingList))
})

//Post Booking Time to api/bookinglists
router.post('/', (req,res)=>{
    const newBookingList = new BookingList({
        BookedBy: req.body.BookedBy,
        Day:req.body.Day,
        Time:req.body.Time
    });

    newBookingList.save()
    .then(BookingList => res.json(BookingList));
});

module.exports = router;