//Variables imports
const express = require("express");
const router = express.Router();
const userControll = require("../controllers/userControll");

//Routes to register && login
router.post("/register", userControll.register);
router.post("/login", userControll.login);

//Export code
module.exports = router;    
    