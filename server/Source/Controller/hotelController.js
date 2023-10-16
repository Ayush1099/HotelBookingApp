const hotelModel = require("../../Model/Schema/hotelSchema")

exports.getHotels=async(req,res)=>{
    const getHotels=await hotelModel.find({}, { _id: 0, __v: 0 })
    res.status(200).json({getHotels})
}