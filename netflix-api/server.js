const express = require("express");
require("dotenv").config();

const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/UserRoutes");

const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/netflix"; 

mongoose
  .connect(MONGODB_URI) 
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => console.log("error" + error.message));

app.use("/api/user", userRoutes);
app.use(express.static("../netflix-client/build"));

app.listen(port, () => {
  console.log(`Server is started and running on port ${port}`);
});
