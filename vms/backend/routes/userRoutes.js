const express = require('express')
const router = express.Router()
const usersController = require('../controllers/userController')

router.route('/')
    .get(usersController.getAllUsers) // read controller
    .post(usersController.createNewUser) // create controller
    .patch(usersController.updateUser) // update 
    .delete(usersController.deleteUser) // delete 


module.exports = router