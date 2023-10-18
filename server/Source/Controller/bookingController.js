const repo = require("../DataAccessLayer/BookingRepository")
const sanitize = require("mongo-sanitize");

exports.getBooking = async (req, res) => {
    const response = await repo.getBooking(req.params);
    res.status(200).json(response);
}

exports.userBooking = async (req, res) => {
    const request = sanitize(req.body);
    try {
        const response = await repo.userBooking(request);
        res.status(response.statusCode).json({})
    } catch (error) {
        next(error);
    }
}

exports.updateBooking = async (req, res) => {
    const request = sanitize(req.body);
    const response = await repo.updateBooking(request);
    res.status(response.statusCode).json({})
}

exports.deleteBooking = async (req, res) => {
    const request = sanitize(req.body);
    const response = await repo.deleteBooking(request);
    res.status(response.statusCode).json({})
}