// Variables Imports
const express = require("express");
const router = express.Router();
const auth = require("../controllers/authControll");

//Access Routes
router.get("/", auth, (req, res) => {
  if (req.user.admin) {
    res.send("Succeslfy: This data only access by admin");
  } else {
    res.status(401).send("Access Denied: Not admin");
  }
});
//Access Free Route
router.get("/free", auth, (req, res) => {
    res.send("This data only access by logged user");
});

module.exports = router;
