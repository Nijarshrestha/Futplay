const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FutsalCourtSchema = new Schema({
    Name :{
        type: String,
        required: true
    },
    Address :{
        type: String,
        required: true
    },
    ContactNo :{
        type: String,
        required: true
    },
    Email :{
        type: String,
        required: true
    },
    Date: {
        type: Date,
        default: Date.now
    }
    
})
module.exports = mongoose.model('Futsal-Courts',FutsalCourtSchema)