const mongoose = require('mongoose')
const Schema = mongoose.Schema

// const BookingListSchema = new Schema({
//     BookedBy: {
//         type: String,
//         required: true
//     },
//     Day : {
//         type:String,
//         required: true
//     },
//     Time: {
//         type: String,
//         required: true
//     },
//     Date : {
//         type: Date,
//         default:Date.now
//     }

// })


const BookingListSchema = new Schema({

  userSchema: { 
    type: new mongoose.Schema({
      Name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
      },

      Phone: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
      }      
    }),  
    required: true
  },

  futsalCourtSchema : {
    type: new mongoose.Schema({
      Name: {
        type: String,
        required: true,
        trim: true, 
        minlength: 5,
        maxlength: 255
      } 

    }),
    Day : String,
    Time : Number,
    Username : String,
    required: true
  },
  Day : {
      required : true,
      type : String
  },
  Date : { 
    type: Date, 
    required: true,
    default: Date.now
  },

    // startTime : Number,
    // endTime : Number
  Time : {
    type : Number,
    required : true

  }

});

module.exports = mongoose.model('bookinglist', BookingListSchema)