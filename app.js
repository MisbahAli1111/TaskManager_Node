
const express = require('express')
const app = express()
const tasks = require('./routes/task')
const connectDB = require('./db/connect')
require('dotenv').config()
//middleware
app.use(express.static('./public'))
app.use(express.json()) 



app.use('/api/v1/tasks',tasks)


const start = async () =>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(5000, console.log('Port is enabled'))
    } catch (error) {
        console.log(error)
    }
}

start()
