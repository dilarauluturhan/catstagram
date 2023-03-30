const mongoose = require("mongoose");

const url = "mongodb+srv://MongoDb:1@socialmedia.phnpzbe.mongodb.net/?retryWrites=true&w=majority";

const connection = () => {
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => console.log("MongoDb bağlantısı başarılı!"))
        .catch((err) => console.log("err " + err.message));
}

module.exports = connection();