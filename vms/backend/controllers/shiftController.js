const asyncHandler = require ('express-async-handler')  // keep us from using try catch blocks
const brcypt = require('bcrypt') // for hasing the password
const Shift = require('../models/Shift')
const User = require('../models/User')



//@desc Get all user
//@route GET /users
//@access Private

const getAllShifts = asyncHandler (async(req,res) => {
  const shifts = await Shift.find().lean()  //lean will give us data thats necessary and -paswword will return everything except password
  if(!shifts?.length){
   return res.status(400).json({message : 'No shifts found'})
  }
  res.json(shifts)
})


//@desc Post all user
//@route Post /users
//@access Private

const createNewShift = asyncHandler (async(req,res) => {
    const {title, description, startTime, endTime } = req.body
    //confirm data

    if (!title ||!description ||!startTime || !endTime ){
        return res.status(400).json({message: 'all fields are required'})
    }

    // check for duplicates
    const duplicate = await Shift.findOne({title}).lean().exec()

    if(duplicate){
        return updateShift(req, res)
    }

    //this is stupid but required I suppose?
    const duration = new Date(endTime).getTime() - new Date(startTime).getTime();
    const shiftObject = {
        title, description, startTime, endTime, duration
    }

    const shift = await Shift.create(shiftObject)
    
    if (shift) {
        res.status(201).json({message:`New shift ${title} created`})
    }else {
        res.status(400).json({message:`Invalid shift data received`})
    }
})

//@desc Update a user
//@route PATCH /users
//@access Private

const updateShift = asyncHandler (async(req,res) => {
  const {title, description, startTime, endTime } = req.body
  //confirm data

  console.log("THE VOICES")

  if (!title ||!description ||!startTime || !endTime ){
      return res.status(400).json({message: 'all fields are required'})
  }

  const shift = await Shift.findOne({title}).lean().exec()
  shift.title = title;
  shift.description = description;
  shift.startTime = startTime;
  shift.endTime = endTime;
  shift.duration = new Date(endTime).getTime() - new Date(startTime).getTime();

  await shift.save()
})

//@desc Delete a user
//@route Delete /users
//@access Private

const deleteShift = asyncHandler (async(req,res) => {
    
    const {title} = req.body
    //confirm data
    if (!title){
        return res.status(400).json({message: 'all fields are required'})
    }
    const deletedShift = await Shift.deleteMany({title});
    if(deletedShift){
        return res.status(200).json({message: 'Shift deleted successfully'})
    }
    return res.status(400).json({message: 'Shift not found'})
    })

// function to add shifts to shifts array in user
const shiftSignup = asyncHandler (async(req,res) => {
    
    const { shiftTitle, userEmail } = req.body;

    const user = await User.findOne({ email: userEmail });
    const shift = await Shift.findOne({ title: shiftTitle });

 

    if (!user || !shift) {
        return res.status(400).json({ message: 'User or shift not found' });
    }

    // check if the user is already signed up for the shift or not
    if (user.shifts.includes(shift._id)) {
        return res.status(400).json({ message: 'User already signed up for shift' });
    }


    user.shifts.push(shift._id);
    await user.save();

    
    return res.status(200).json({ message: 'User signed up for shift successfully' });


});

// function for dropping the shift 

const dropShift = asyncHandler (async(req,res) => {
    const { shiftTitle, userEmail } = req.body;
    const user = await User.findOne({ email: userEmail });
    const shift = await Shift.findOne({ title: shiftTitle });

    if (!user || !shift) {
        return res.status(400).json({ message: 'User or shift not found' });
    }

    if (!user.shifts.includes(shift._id)) {
        return res.status(400).json({ message: 'User has not signed up for this shift' });
    }

    const index = user.shifts.indexOf(shift._id);
    if (index > -1) {
        user.shifts.splice(index, 1);
    }
    await user.save();
    
    console.log(user)
    return res.status(200).json({ message: 'User dropped the shift successfully' });
    
});
 

module.exports = {
    getAllShifts,
    createNewShift,
    updateShift,
    deleteShift,
    shiftSignup,
    dropShift
}