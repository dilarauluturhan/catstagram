const express = require("express");
const router = express.Router();
const User = require("../models/user");
const createToken = require("../service/token");
const { v4: uuidv4 } = require("uuid");
const upload = require("../service/upload");

/* REGISTER */
router.post("/register", upload.single("avatar"), async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = new User({
            _id: uuidv4(),
            name: name,
            email: email,
            password: password,
            avatar: req.file
        });

        const result = await user.save();

        const token = createToken;

        res.json({ token: token, user: result });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})
/* REGISTER */

/* LOG IN */
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email, password: password });
        if (user == null) {
            res.status(403).json({ message: "Mail adresi veya şifre yanlış!" })
        } else {
            
            const token = createToken();

            res.json({ token: token, user: user });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})
/* LOG IN */

module.exports = router;