const express=require('express');
const routing=express.Router();
const userController=require('../Controller/userController')
const hotelController=require('../Controller/hotelController')
const bookingController=require('../Controller/bookingController')

routing.post('/registerUser',userController.userRegister)
routing.post('/loginUser',userController.userLogin)

routing.get('/gethotels',hotelController.getHotels)

routing.post('/bookings',bookingController.userBooking)
routing.put('/updateBookings',bookingController.updateBooking)
routing.delete('/deleteBooking',bookingController.deleteBooking)
routing.get('/getBookings/:email',bookingController.getBooking)

module.exports=routing;
