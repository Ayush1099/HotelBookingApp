const fs = require('fs');
let errorLogger =  (err, req, res, next) => {
        if (err) {
            fs.appendFile('ErrorLogger.txt', `${new Date().toDateString()} - ${err.message}\n` ,  (error) => {
            if (error) {
                console.log("logging failed");
            }
        });
    }
}
module.exports = errorLogger;
