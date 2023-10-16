var mongoose=require('mongoose');

mongoose.set('strictQuery',true);//Hide  Warning

mongoose.connect('mongodb://localhost:27017/BonStay', {family:4})
        .then(()=>{console.log('DB Connection Successfull');})
        .catch(()=>{console.log('DB Connection Failed');})