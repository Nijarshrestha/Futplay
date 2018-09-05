const mongoose = require('mongoose');
const Schema = mongoose.Schema

const InvitationSchema = new Schema ({
    senderId:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        require:true
    },

    recieverId: {
        type:Schema.Types.ObjectId,
        ref:'User',
        require: true
    },
    groundname: {
        type:String
    },
    
    date:{
        type: String
    },
    slots: {
        type: String
    }
   
})

module.exports = mongoose.model('Invitation',InvitationSchema);