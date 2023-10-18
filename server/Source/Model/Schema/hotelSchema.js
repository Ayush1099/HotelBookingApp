const mongoose=require('mongoose');

const hotelSchema=new mongoose.Schema(
    {
        HotelName:{
            type:String,
            unique: true,
            required: [true, 'Required field'],
        },
        PhoneNo:{
            type:Number,
            unique:true,
            required:[true,'Required field'],
        },
        Address:{
            type:String,
            required:[true,'Required field']
        }
    }
)
const HotelModel=mongoose.model('hotels',hotelSchema);
module.exports=HotelModel;
