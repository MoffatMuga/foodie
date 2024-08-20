const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const { notFound, errorHandler } = require('./middleware/errorMiddleware')
const reservationRouter = require('./routes/reservationRoutes')

dotenv.config()

const URL = process.env.URI

const PORT = 8000

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/api', reservationRouter)
app.use(errorHandler)
app.use(notFound)


const connectDb = async () => {
    try {
        await mongoose.connect(URL)
        console.log('database connected successfuly')

        app.listen(PORT, () => {
            console.log(`server running on PORT ${PORT}`)
        })
    } catch (error) {
        console.log('Error connecting to MongoDb:', error)
        process.exit(1)
    }
}

connectDb()
