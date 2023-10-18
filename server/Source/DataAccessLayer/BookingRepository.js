const bookingModel = require("../Model/Schema/bookingSchema");

exports.getBooking = async (req, res) => {
    return await bookingModel.find({ EmailId: req.email }, { _id: 0, __v: 0 });
}

exports.userBooking = async (req, res) => {
    const { email, startDate, endDate, noOfPersons, noOfRooms, hotelName } = req;
    try {
        await bookingModel.create({ EmailId: email, StartDate: startDate, EndDate: endDate, NoOfPersons: noOfPersons, NoOfRooms: noOfRooms, HotelName: hotelName });
        return { statusCode: 201 }
    } catch (error) {
        throw new Error("BookingFailed")
    }
}

exports.updateBooking = async (req, res) => {
    const { email, startDate, endDate, noOfPersons, noOfRooms, hotelName } = req;
    await bookingModel.updateOne({ EmailId: email }, { StartDate: startDate, EndDate: endDate, NoOfPersons: noOfPersons, NoOfRooms: noOfRooms, HotelName: hotelName });
    return {statusCode:200};
}

exports.deleteBooking = async (req, res) => {
    const { EmailId, HotelName, StartDate, EndDate, NoOfPersons, NoOfRooms } = req;
    await bookingModel.deleteOne({
        EmailId: EmailId,
        HotelName: HotelName,
        StartDate: StartDate,
        EndDate: EndDate,
        NoOfPersons: NoOfPersons,
        NoOfRooms: NoOfRooms,
      });
    return {statusCode : 200};
}