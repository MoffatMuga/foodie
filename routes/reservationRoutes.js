const express = require('express')
const router = express.Router()
const reservationCtrl = require('../controllers/reservationCtrl')


router.post('/reservation', reservationCtrl.createReservation)

module.exports = router