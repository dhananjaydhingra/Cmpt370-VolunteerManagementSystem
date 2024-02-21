const User = require ("../models/User");
const {createSecretToken}  = require("../utils/SecretToken");
const bcrypt = require("bcrypt");

module.exports.Signup = async (req,res,next) => {
    try {
        const { email, password, fullName, phoneNumber,roles, createdAt } = req.body;
        const existingUser = await User.findOne({email});
        if (existingUser){
            return res.status(400).json({message: "User already exists"});

        }
        const user = await User.create({ email, password, fullName, phoneNumber,roles, createdAt });
        const token = createSecretToken(user._id);
        res.cookie("token", token, {
            withCredentials: true,
            httpOnly: false,
        });
        res
            .status(201)
            .json({ message: "User signed in successfully ", success:true, user});
        next();
    } catch (error) {
        console.log(error);
    }
}


module.exports.Login = async (req,res,next) => {
    try {
        const { email, password} = req.body;
        if (!email || !password){
            return res.json({message:'All field are required'})
        }
        const user = await User.findOne({email});
        // console.log(user)
        if(!user){
            return res.json({message:'Incorrect password or email'})
        }
        const auth = await bcrypt.compare(password,user.password);
        if(!auth){
            return res.json({message:'Incorrect password or email'})
        }

        const token = createSecretToken(user._id);
        res.cookie("token",token,{
            withCredentials:true,
            httpOnly:false,
        });
        res.json({message:'User logged in successfully', success:true, user})
        next();
    }
    catch(error){
        console.error(error)
    }
}

module.exports.Logout = async (req,res,next) => {
    try {
        res.cookie("token","",{maxAge:1});
        res.json({message:'User logged out successfully', success:true})
        next();
    }
    catch(error){
        console.error(error)
    }
}


