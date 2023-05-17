var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: () => Date.now()
    },
    phone: String,
});

var user = new mongoose.model('User', schema);
module.exports = user;