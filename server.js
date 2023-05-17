const express = require('express'); // Web framework that is used for building the REST APIs
require('dotenv').config();
const bodyParser = require('body-parser'); // Module that parses the request (of various content types) and creates a req.body object that we can access in our routes.
const mongoose = require('mongoose'); // Mongodb ODM

const PORT = process.env.PORT || 4200;
const conn_string = process.env.CONN_STRING;
const UserRoutes = require('./routes/userRoutes');
const AuthRoutes = require('./routes/authRoutes');
const uploadsRoute = require('./routes/cloudinaryRoute');

const app = express();

// Two body-parser middlewares
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Connecting to cloud Mongodb Atlas instance
mongoose.Promise = global.Promise;
mongoose.connect(conn_string, {useNewUrlParser: true}).then(() => {
    console.log("Database Connected Successfully!!!");    
}).catch(err => {
    console.log('Could not connect to the database', err);
});

// Simple route that returns a welcome message to the clients.
app.get('/', (req, res) => {
    res.json({"message": "Welcome to the MongoDB and Express API."});
});

// Adding the route class to the server.js file
app.use('/user', UserRoutes);
app.use('/auth', AuthRoutes);
app.use('/upload-images', uploadsRoute);

// Listen on port 3000 for incoming connections.
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});