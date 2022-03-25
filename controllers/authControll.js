//Variables Imports
 
  const jwt = require("jsonwebtoken");
  
// Auth-Token Verify
module.exports = function (req, res, next) {
  const token = req.header("authorization-token");
  if (!token) {
    return res.status(401).send("Access Denied");
  }
  try {
    const userVerified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = userVerified;
    next();
  } catch (err) {
    res.status(401).send("Access Denied: Invalid token");
  }

};
