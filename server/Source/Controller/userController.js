const repo = require("../DataAccessLayer/UserRepository")
const sanitize = require("mongo-sanitize");

exports.userRegister = async (req, res, next) => {
    try {
        const request = sanitize(req.body);
        const response = await repo.UserRegisterRepository(request);
        res.status(response.statusCode).json({ message: response.message })
    } catch (error) {
        next(error);
    }
}