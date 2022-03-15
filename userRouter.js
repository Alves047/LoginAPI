//Variables imports
const express = require("express");
const router = express.Router();
const userControll = require("../controllers/userControll");

//Routes
router.post("/register", userControll.register);
router.post("/login", userControll.login);

//Export
module.exports = router;    
    