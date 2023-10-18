const express=require('express');
const bodyParser=require('body-parser');
const route=require('./Source/Routes/Routing');
const auth = require("./Source/Middleware/Auth");
require('./Source/Model/connection')
const cookieParser = require('cookie-parser');
const cors = require('cors');
const ErrorHandler=require("./Source/Middleware/ErrorHandler");

const app=express();
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.post('/registerUser',route);
app.use('/',auth,route);
app.use(ErrorHandler);
const port=process.env.PORT || 4000;
app.listen(port,()=>{
    console.log(`App running on port ${port}`);
})