const multer = require('multer');
const path = require('path');

const PATH_UPLOAD_IMAGES = path.resolve(__dirname, '../public/images');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, PATH_UPLOAD_IMAGES);
    },
    filename: (req, file, cb)=> {
        cb(null, file.originalname);
    }
});

const uploadImages = multer({storage});

module.exports = uploadImages;