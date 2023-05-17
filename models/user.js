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
    phone: {
        type: String,
        required: false
    },
    profileImage: { 
        type: String, 
        default: 'https://www.pngitem.com/pimgs/m/22-223968_default-profile-picture-circle-hd-png-download.png' 
    },
    date: {
        type: Date,
        default: () => Date.now()
    },
    employees: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee'
    }]
});

var user = new mongoose.model('User', schema);
module.exports = user;
