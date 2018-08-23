const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var bcrypt = require('bcrypt')

const userSchema = new Schema({
   Firstname:{
       type: String,
       required: true
   },
   Lastname:{
    type: String,
    required: true
    },
    Email:{
        type: String,
        required: true
    },
    Phonenumber:{
        type: Number,
        required: true
    },
    Username:{
        type: String,
        required: true
    },
    Password:{
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
    });

    userSchema.methods.generateHash = function(Password){
        return bcrypt.hashSync(Password, bcrypt.genSaltSync(8), null)
    }

module.exports = mongoose.model('User',userSchema)