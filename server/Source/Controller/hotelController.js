const repo = require("../DataAccessLayer/HotelRepository")

exports.getHotels=async(req,res)=>{
    const response = await repo.getHotels();
    res.status(200).json(response)
}