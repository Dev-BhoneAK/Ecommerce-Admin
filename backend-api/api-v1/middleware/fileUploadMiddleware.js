const multer = require("multer");
const fs = require("fs");

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    const urlArr = req.originalUrl.split("/"); //originalUrl is like /api/v1/products
    const destinationDir = "public/images/" + urlArr[3]; // put images into different folders according to different routes
    if (!fs.existsSync(destinationDir)) {
      fs.mkdirSync(destinationDir, {
        recursive: true,
      });
    }
    callback(null, destinationDir);
  },
  filename: function (req, file, callback) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    console.log("File is ", file);
    callback(null, file.fieldname + "-" + uniqueSuffix + ".png");
  },
});

const multerOption = multer({
  storage: storage,
  fileFilter: function (req, file, callback) {
    const allowedExtensions = ["image/png", "image/jpeg", "image/jpg"];
    console.log("arrive here");
    console.log("MIME type ", file.mimetype);
    console.log("Field Name ", file.fieldname);
    if (!allowedExtensions.includes(file.mimetype)) {
      return callback(new Error("Please upload only image files."), false);
    }
    callback(null, true);
  },
});

exports.fileUpload = multerOption.single("image");
exports.multiFileUpload = multerOption.array("images", 5); // maximum image upload set to 5.
