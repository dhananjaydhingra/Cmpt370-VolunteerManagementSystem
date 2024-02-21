const user = require('../models/User')
const shift = require('../models/Shift')
const asyncHandler = require ('express-async-handler')  // keep us from using try catch blocks
const brcypt = require('bcrypt') // for hasing the password
const User = require('../models/User')



//@desc Get all user
//@route GET /users
//@access Private

const getAllUsers = asyncHandler (async(req,res) => {
       const users = await User.find().select('-password').lean()  //lean will give us data thats necessary and -paswword will return everything except password
       if(!users?.length){
        return res.status(400).json({message : 'No users found'})
       }
       res.json(users)
})


const validateUser = asyncHandler(async(req,res) => {
    const { email, password } = req.body

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' })
    }

    const user = await User.findOne({ email }).exec()

    if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' })
    }

    const isMatch = brcypt.compare(password, user.password)

    if (!isMatch) {
        return res.status(401).json({ message: 'Invalid credentials' })
    }

    res.json({
        _id: user._id,
        username: user.username,
        email: user.email,
        roles: user.roles,
        token: generateToken(user._id)
    })
})
//@desc Post all user
//@route Post /users
//@access Private

const createNewUser = asyncHandler (async(req,res) => {
    const {password, fullName,email,phoneNumber, roles } = req.body
    //confirm data

    if (!fullName ||!email ||!phoneNumber || !roles ){
        return res.status(400).json({message: 'all fields are required'})
    }

    

    // check for duplicates
    const duplicate = await User.findOne({email}).lean().exec()

    if(duplicate){
        return res.status(409).json({message: 'Duplicate email'})
    }
    // hsah the password
    const hashedPwd = await brcypt.hash(password,10) // salt roundes

    const userObject = {
        fullName,
        email,
        phoneNumber,    
        roles,
        "password":hashedPwd
    }

    const user = await User.create(userObject)
    
    if (user) {
        res.status(201).json({message:`New user ${fullName} created`})
    }else {
        res.status(400).json({message:`Invalid user data received`})
    }
})

//@desc Update a user
//@route PATCH /users
//@access Private

const updateUser = asyncHandler (async(req,res) => {
    const {id, fullName,email,phoneNumber, roles, password } = req.body

    if (!id ){
        res.status(400).json({message: 'ID is required'})
    }

    User.findByIdAndUpdate(id, req.body).then(function (unk) {
        res.status(201).json({message:`${fullName} updated`})
      })
      .catch(function (err) {
        console.log(err);
        res.status(400).json({message:`Failure`})
      });
})

//@desc Delete a user
//@route Delete /users
//@access Private

const deleteUser = asyncHandler (async(req,res) => {
    const { id } = req.body
    if (!id){
        return res.status(400).json({message: `user ID requried`})
    }

    const shifts = await Shifts.findOne({user:id}).lean().exec()
    if (shifts?.length){
        return res.status(400).json({message: 'User has assigned shifts'})
    }

    const user = await User.findById(id).exec()

    if(!user){
        return res.status(400).json({message:'User not found'})
    }

    const result = await user.deleteOne()

    const reply = `Username ${result.username} with ID ${result._id} deleted.`

    res.json(reply)
})
 

module.exports = {
    getAllUsers,
    validateUser,
    createNewUser,
    updateUser,
    deleteUser
}