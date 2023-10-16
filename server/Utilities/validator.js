var emailValidator = require('email-validator');

exports.ValidateUserName=function(name){
    return name.trim().length>=3 ?true: false
}
exports.ValidateUserPhone=function(phone){
    return phone.toString().length==10 ? true: false
}
exports.ValidateUserEmailId=function(email){
    return emailValidator.validate(email) ? true : false
}
exports.ValidateUserPassword=function(password){
    return password.length>=8 && password.length<=12 ? true: false
}
exports.ValidateDate=function (startDate,endDate){    
    return Date.parse(endDate) <= Date.parse(startDate) ? true : false;
}