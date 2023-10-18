const userModel = require("../Model/Schema/userSchema")

exports.UserRegisterRepository = async (req) => {
    try {
        await userModel.create({
            Name: req.name,
            EmailId: req.email,
            PhoneNo: req.phoneNumber,
            Password: req.password
        });
        return { statusCode: 201 };
    } catch (error) {
        throw new Error("AlreadyExists")
    }
}