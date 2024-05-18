const multer = require("multer");
const uuidv4 = require("uuid");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    const randID = uuidv4.v4();
    cb(null, randID + file.originalname);
  },
});
const uploadFile = multer({ storage: storage });

module.exports = {
  uploadFile,
};
