const mongoose = require("mongoose");
const express = require("express");
const app = express();
const {v4:uuidv4} = require("uuid");
const multer = require("multer");
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.listen(5000, () => {
    console.log("Sunucu 5000 port üzerinden ayağa kalktı")
})