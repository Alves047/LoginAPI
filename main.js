//Variables Imports
  require("dotenv").config();
  const express = require("express");
  const app = express();
  const userRouter = require("./routes/userRouter");
  const mongoose = require("mongoose");
  const adminRouter = require("./routes/admRouter");

//Connect with DB
mongoose.connect( process.env.MONGO_CONNECTION_URL, { useNewURLParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Mongo Connected");
    }
  }
);

//ROUTES ACCESS
app.use("/user", express.json(), userRouter);
app.use("/admin", express.json(), adminRouter);

//Route Listen
app.listen(process.env.PORT, () => {
  console.log("Server is running");
});
