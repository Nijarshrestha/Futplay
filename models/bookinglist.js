const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BookingListSchema = new Schema({
    BookedBy: {
        type: String,
        required: true
    },
    Day : {
        type:String,
        required: true
    },
    Time: {
        type: String,
        required: true
    },
    Date : {
        type: Date,
        default:Date.now
    }

})

module.exports = mongoose.model('bookinglist', BookingListSchema)