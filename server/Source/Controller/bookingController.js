const bookingModel = require("../Model/Schema/bookingSchema");

exports.getBooking = async (req, res) => {
    try {
        const Bookings = await bookingModel.find({ EmailId: req.params.email }, { _id: 0, __v: 0 });
        if (Bookings.length > 0) {
            res.status(200).json({ Bookings })
        }
    } catch (error) {
        res.status(400).json({})
    }
}
exports.userBooking = async (req, res) => {
    const { email, startDate, endDate, noOfPersons, noOfRooms, hotelName } = req.body;
    try {
        await bookingModel.create({ EmailId: email, StartDate: startDate, EndDate: endDate, NoOfPersons: noOfPersons, NoOfRooms: noOfRooms, HotelName: hotelName });
        res.status(201).json({})
    } catch (error) {
        res.status(400).json({
            message: "Booking Failed"
        })
    }
}
exports.updateBooking = async (req, res) => {
    const { email, startDate, endDate, noOfPersons, noOfRooms, hotelName } = req.body;

    await bookingModel.updateOne({ EmailId: email }, { StartDate: startDate, EndDate: endDate, NoOfPersons: noOfPersons, NoOfRooms: noOfRooms, HotelName: hotelName });

    res.status(200).json({})

}
exports.deleteBooking = async (req, res) => {
    const { EmailId, HotelName, StartDate, EndDate, NoOfPersons, NoOfRooms } = req.body;

    await bookingModel.deleteOne({
        EmailId: EmailId,
        HotelName: HotelName,
        StartDate: StartDate,
        EndDate: EndDate,
        NoOfPersons: NoOfPersons,
        NoOfRooms: NoOfRooms,
      });
    res.status(200).json({})
}