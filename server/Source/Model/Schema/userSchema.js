const mongoose=require('mongoose');

const userSchema=new mongoose.Schema(
    {
        Name:{
            type:String,
            unique:false,
            required: [true, 'Required field'],
        },
        EmailId:{
            type:String,
            unique:true,
            required: [true, 'Required field'],
        },
        PhoneNo:{
            type:Number,
            required:[true,'Required field'],
        },
        Password:{
            type:String,
            unique:true,
            required:[true,'Required field'],
        }
    }
)
const UserModel=mongoose.model('user',userSchema);
module.exports=UserModel;
