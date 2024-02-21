const mongoose = require('mongoose')

/** 
 * 
 * shifts are picked up by particular volunteer 
   shifts should have the following thing
   Date and time - duration - start time end time
   description
   people should be able to see to whom the shift is assigned 
   shifts are open or taken
*/ 
const shiftSchema = new mongoose.Schema({
    // volunteer: {
    //     type:mongoose.Schema.Types.ObjectId,
    //     required: true,
    //     ref: 'User'
    // },
    title:{
        type:String,
        required:true
    },
    description:{ //shift description
        type:String,
        required:true
    },
    startTime:{
        type:Date,
        required:true
    },
    endTime: {
        type:Date,
        required:true
    },
    duration:
    {
        type:Number,
        required: true
    },
    completed:{ // if shifts picked 1 else 0
        type:Boolean,
        default: false

    }
})

module.exports = mongoose.model('Shift',shiftSchema)