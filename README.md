# HotelBookingApp
This is a Hotel Booking App where the user can Booking Hotels and also Update and Delete the Bookings.
![Alt text](client/image/homepage.png)

# Technologies Used
1. Library: React JS
2. Framework: Express JS
3. Database: MongoDB

# Features
1. Implemented JWT mechanism for Authentication and Authorization.
2. Implemented Error Handling Middleware.

# Installation
To run this applcation locally, follow these steps:

1. Clone the repository: git clone https://github.com/Ayush1099/HotelBookingApp.git
2. Install the dependencies for both client & server: npm install.
3. Start the development server for both client & server: nodemon app.js.
4. A Login page will where the user can login using following credentials:- email: jojo@gmail.com, password: password123.
5. There is also an option to Register where the user can create a new account.

# Setup DB and collection in MongoDB
1. Open Command Prompt
2. Enter the following command to create a DB and collection: mongoimport --db BonStay --collection hotels --file "PATH_TO_JSON_FILE" --jsonArray NOTE:- "PATH_TO_JSON_FILE" should be the path of the json file which has the data to be imported to MongoDB. The JSON file will be included in the CollectionData Folder inside client folder.
