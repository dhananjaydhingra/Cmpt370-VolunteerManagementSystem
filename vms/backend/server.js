require('dotenv').config()

const express = require('express')
const app = express()
const path = require("path")
const {logger} = require('./middleware/logger')
const PORT = process.env.PORT || 3500
const errorHandler = require('./middleware/errorHandler')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const corsOptions = require('./config/corsOptions')
const connectDB = require('./config/dbConn')
const mongoose = require('mongoose')
const { sensitiveHeaders } = require('http2')






console.log(process.env.NODE_ENV)

connectDB()

app.use(logger)

app.use(cors(corsOptions))

app.use(express.json())

app.use(cookieParser())

app.use('/', express.static(path.join(__dirname,'/public')))

app.use('/',require('./routes/root')) // route to the index page

app.use ('/',require('./routes/AuthRoute')) // auth route coming from AuthRoute.js

app.use('/users',require('./routes/userRoutes'))

// app.use('/login',require('./routes/authRoutes'))

app.use('/shifts', require('./routes/shiftRoutes'))
app.use('/shifts/shiftsignup', require('./routes/shiftRoutes'))
app.use('/shifts/shiftdrop', require('./routes/shiftRoutes'))

// app.use('/login',userController.validateUser, require('./routes/loginRoutes'))


app.use(errorHandler)

mongoose.connection.once('open', () => {
    console.log('Connected to Mongo')
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
})

// mongoose.connection.on('error',err =>{
//     console.log(err)
//     logEvents(`${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`,
//     'mongoErrLog.log')
// })

