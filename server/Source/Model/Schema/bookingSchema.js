var mongoose=require('mongoose');

const bookingSchema=new mongoose.Schema(
    {
        HotelName:{
            type:String,
        },
        EmailId:{
            type:String,
        },
        StartDate:{
            type:Date,
            required:[true,'Required field'],
        },
        EndDate:{
            type:Date,
            required:[true,'Required field'],
        },
        NoOfPersons:{
            type:Number,
            required:[true,'Required field'],
        },
        NoOfRooms:{
            type:Number,
            required:[true,'Required field'],
        },
    }
)

const BookingModel=mongoose.model('bookings',bookingSchema);
module.exports=BookingModel;