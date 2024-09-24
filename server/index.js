require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const routes = require("./routes/route");
const authRoute = require("./routes/authRoute");

app.use(express.json());
// Middleware
app.use(cors());
app.use(bodyParser.json());

//routes
app.use("/api/students", routes);

app.use("/api/auth/", authRoute);

//connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //port
    app.listen(process.env.PORT, () => {
      console.log("connected to db & listening of port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
