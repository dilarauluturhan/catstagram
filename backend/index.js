const mongoose = require("mongoose");
const express = require("express");
const app = express();
const { v4: uuidv4 } = require("uuid");
const multer = require("multer");
const cors = require("cors");

app.use(express.json());
app.use(cors());

const url = "mongodb+srv://MongoDb:1@socialmedia.phnpzbe.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("MongoDb bağlantısı başarılı!"))
    .catch((err) => console.log("err " + err.message));

// register şemamız için user tablosu oluşturduk
const userSchema = new mongoose.Schema({
    _id: String,
    name: String,
    email: String,
    password: String,
    avatar: Object
});

const User = mongoose.model("User", userSchema);

// dosyayı kaydedeceğimiz bir yapıya ihtiyacımız var
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "uploads/")
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname)
    }
});

const upload = multer({storage: storage});

app.post("/api/register", upload.single("avatar"), async (req, res) => {
    try {
        const {name, email, password} = req.body;
        const user = new User({
            _id: uuidv4(),
            name: name,
            email: email,
            password: password,
            avatar: req.file
        });
    } catch (error) {
        
    }
})

app.listen(5000, () => console.log("Sunucu 5000 port üzerinden ayağa kalktı!"))