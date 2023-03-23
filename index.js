const express = require('express')

const app = express()
const PORT = 5000
const todos = require('./routes/todoRoutes')
const connectDB = require('./db/connect')
require('dotenv').config()
// MIDDLEWARE
app.use(express.json())

// ROUTES 
app.use('/api', todos)

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT, () => {
          console.log(`API listening on PORT ${PORT} `)
        })
 } catch (error) {
    console.log(error)
 }
}

// CALLING FUNCTION TO LISTEN TO SERVER
start();


// Export the Express API
module.exports = app 