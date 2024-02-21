const express = require('express')
const router = express.Router()
const shiftsController = require('../controllers/shiftController')

router.route('/')
    .get(shiftsController.getAllShifts) // read controller
    .post(shiftsController.createNewShift) // create controller
    .patch(shiftsController.updateShift) // update 
    .delete(shiftsController.deleteShift) // delete 

router.route('/shiftsignup')
    .post(shiftsController.shiftSignup)

router.route('/shiftdrop')
    .post(shiftsController.dropShift)


module.exports = router