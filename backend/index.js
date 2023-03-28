const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const connection = require("./database/db");

app.use(express.json());
app.use(cors());

// resim dosyalarını okumak için izin ver
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const authRouter = require("./router/auth");
const postRouter = require("./router/post");

connection();

app.use("/api", authRouter);
app.use("/api", postRouter);

app.listen(5000, () => console.log("Sunucu 5000 port üzerinden ayağa kalktı!"))