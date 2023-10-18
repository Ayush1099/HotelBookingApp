const Message=require("./ErrorMessages")

function ErrorHandler(Error,req,res,next){
    res.status(Message[Error.message].status).json({
        message:Message[Error.message].errorMessage
    })
}
module.exports=ErrorHandler
