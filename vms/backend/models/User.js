const mongoose = require('mongoose');
const bcrypt = require ('bcrypt');

// schema for data model
// manager, admins, employees everyone is a user of our system so rather than having different database schmemas for everyone we can implement a role based access model
// volunteer with no account will have different data from everyone else
const userSchema = new mongoose.Schema({
    password: {
        type:String,
        required: [true, "your password is required"]
    },
    fullName:{
        type: String,
        required:[true, "your fullname is required"]
    },
    email:{ // lets keep email as username  
        type:String,
        required:[true, "your email is required"]
    },
    phoneNumber:{
        type:Number,
        required:[true, "your phonenumber is required"]
    },
    roles:{
        type:String,
        enum:["VOLUNTEER", "EMPLOYEE", "ADMIN", "VOLUNTEERNOACCOUNT"],
        // default:"VOLUNTEER" // type:enum - try to make it a enum - 
    },
     shifts:[{
         type:mongoose.Schema.Types.ObjectId,
         ref:'Shift'
     }],
     createdAt: {
        type:Date,
        default: new Date(),
     } ,

});

userSchema.pre("save", async function() {
    this.password = await bcrypt.hash(this.password,12)
})


module.exports = mongoose.model('User',userSchema)