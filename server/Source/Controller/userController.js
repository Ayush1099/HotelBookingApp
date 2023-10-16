const userModel = require("../../Model/Schema/userSchema")

exports.userRegister = async (req, res, next) => {
    try {
        await userModel.create({Name: req.body.name,
            EmailId:req.body.email,
            PhoneNo:req.body.phoneNumber,
            Password:req.body.password});
        res.status(201).json({})
    } catch (error) {
        res.status(400).json({
            message: `User already exists`
        })
    }
}
exports.userLogin = async (req, res, next) => {
    const user = await userModel.find({ EmailId: req.body.email, Password: req.body.password });
    if (user.length > 0) {
        res.status(201).json({})
    }
    else {
        res.status(400).json({
            message: "Login failed. Please check your credentials."
        })
    }
} 