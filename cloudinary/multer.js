const multer = require('multer');
const path = require('path');

module.exports = multer({
    storage: multer.diskStorage({}),
    fileFilter:(req, file, cb) => {
        let ext = path.extname(file.originalname);
        if(ext.match(/\.(png,jpg,jpeg,gif)$/)){
            return cb("message: Unsupported file extension");
        }
        cb(null, true);
    },
    limits: {fileSize: 2084 * 2084}, 
});