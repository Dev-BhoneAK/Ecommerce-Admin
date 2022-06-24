const multer  = require('multer');
const fs = require('fs');

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        const urlArr = req.originalUrl.split("/");
        const destinationDir = "public/images/" + urlArr[3];
        if (!fs.existsSync(destinationDir)) {
            fs.mkdirSync(destinationDir, {
                recursive: true
            });
        }
        callback(null, destinationDir);
    },
    filename: function (req, file, callback) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        callback(null, file.fieldname + '-' + uniqueSuffix + '.png');
    }
})

const multerOption = multer({
    storage: storage,
    fileFilter: function (req, file, callback) {
        const allowedExtensions = ['image/png', 'image/jpeg', 'image/jpg'];
        console.log('MIME type ',file.mimetype);
        if(!allowedExtensions.includes(file.mimetype)) {
            return callback(new Error('Please upload only image files.'), false);
        }
        callback(null, true);
    },
});

exports.fileUpload = multerOption.single('image');
