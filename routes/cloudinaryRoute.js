const express = require('express');
const route = express.Router();
const upload = require('../cloudinary/multer');
const cloudinary = require('../cloudinary/cloudinary');
const fs = require('fs');
const { uploadImages} = require('../controllers/cloudinaryController');


route.post('/', upload.array("image"), uploadImages);


module.exports = route;