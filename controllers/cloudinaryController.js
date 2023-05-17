const express = require('express');
const cloudinary = require('../cloudinary/cloudinary');
const fs = require('fs');

exports.uploadImages = async (req, res) => {
    try{
         if(req.files){
             for(const file of req.files){
                 const { path } = file;
                 const uploader = await cloudinary.uploader.upload(path);
                 console.log(uploader.url);
 
                 fs.unlinkSync(path);
             }
 
             res.status(200).json({
                 message: "Images uploaded successfully"
             })
         }else{
             res.status(200).json({message: 'no media provided'});
         }
     } catch (e) {
         res.status(500).json({err: "server error" });
     }
 }

