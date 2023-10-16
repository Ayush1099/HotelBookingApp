const jwt = require("jsonwebtoken");
require('dotenv').config()
const userModel = require("../../Model/Schema/userSchema")

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
            res.status(404).json({message: "Invalid User"});
        }
    }
    else {
        jwt.verify(token, `${process.env.SecretKey}`, function (err,decoded) {
            if (err) {
                res.status(403).json({ message: "Invalid Request" })
            }
            else {
                return next();
            }
        })
    }
};

module.exports = verifyToken;