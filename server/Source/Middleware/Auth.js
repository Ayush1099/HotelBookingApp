const jwt = require("jsonwebtoken");
require('dotenv').config()
const userModel = require("../Model/Schema/userSchema")
const Message=require("./ErrorMessages")

const verifyToken = async (req, res, next) => {
    const token = req.headers['authorization']
    if (token == null) {
        const user = await userModel.find({ EmailId: req.body.email, Password: req.body.password });
        if (user.length > 0) {
            const payload = { emailId: req.body.email , password: req.body.password};
            const accessToken = jwt.sign(payload, `${process.env.SecretKey}`);
            res.status(201).json({message: accessToken});
        }
        else {
            res.status(Message.NotFound.status).json({message: Message.NotFound.errorMessage});
        }
    }
    else {
        jwt.verify(token, `${process.env.SecretKey}`, function (err,decoded) {
            if (err) {
                res.status(Message.InvalidRequest.status).json({ message: Message.InvalidRequest.errorMessage })
            }
            else {
                return next();
            }
        })
    }
};

module.exports = verifyToken;