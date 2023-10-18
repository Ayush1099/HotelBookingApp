const hotelModel = require("../Model/Schema/hotelSchema")

exports.getHotels = async(req,res)=>{
    return await hotelModel.find({}, { _id: 0, __v: 0 })
}