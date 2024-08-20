const mongoose = require('mongoose')
const validator = require('validator')
const { __esModule } = require('validator/lib/isAlpha')

const reservationShema = new mongoose.Schema({
    firstName : {
        type: String,
        required: true,
        minlength: [3, "First Name should be more than 3 characters"],
        maxlength: [30, "First Name should not exceed 30 characters"]
    },
    lastName : {
        type: String,
        required: true,
        minlength: [3, "Last Name should be more than 3 characters"],
        maxlength: [30, "Last Name should not exceed 30 characters"]
    },
    email : {
        type: String,
        required: true,
        validate: [validator.isEmail, "provide a valid email" ]
    },
    phone : {
        type: Number,
        required: true,
        minlength: [10, "Phone number cannot be less than 10 characters"],
        maxlength: [10, "Phone number cannot be more than 10 characters"]
    },
    time : {
        type: String,
        required: true
    },
    date : {
        type: String,
        required: true
    }
})

module.exports= mongoose.model('Reservation', reservationShema)