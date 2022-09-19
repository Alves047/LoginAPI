//Variables Imports
require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./routes/userRouter");
const mongoose = require("mongoose");
const adminRouter = require("./routes/admRouter");
const bodyparser = require("body-parser");
const cors = require("cors"); 

//Connect with DB
mongoose.connect(
  process.env.MONGO_CONNECTION_URL,
  { useNewURLParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Mongo Connected");
    }
  }
);


//ROUTES ACCESS
app.use(bodyparser.json());
app.use(cors());

app.use("/user", express.json(), userRouter);
app.use("/admin", express.json(), adminRouter);

//Route Listen
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

