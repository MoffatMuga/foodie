const Reservation = require('../models/reservationSchema')
const errorHandler = require('../middleware/errorMiddleware')



const reservationCtrl = {
    createReservation: async (req, res, next) => {
       
        const {firstName, lastName, email, phone, date, time} = req.body
        if(!firstName || !lastName || !email ||!phone ||!date ||!time){
            return next(new errorHandler('Please fill in all the inputs', 400))
        }
       try {
        const newReservation = new Reservation({ firstName, lastName, email, phone, date, time })
        await newReservation.save()
        res.status(201).json({ msg: 'Reservation created successfully', newReservation })
       } catch (error) {
        if(error.name === "ValidationError"){
            const validationErrors = Object.values(error.errors).map(
                (err) => err.message)
            error.message = validationErrors.join(', ');
            error.statusCode = 400;
        }
        return next(error);
       }
     
    }
}

module.exports = reservationCtrl