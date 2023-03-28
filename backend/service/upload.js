const multer = require("multer");

// dosyayı kaydedeceğimiz bir yapıya ihtiyacımız var
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/")
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname)
    }
});

const upload = multer({ storage: storage });

module.exports = upload;