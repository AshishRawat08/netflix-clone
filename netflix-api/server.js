const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/UserRoutes");

const app = express();
app.use(cors());
app.use(express.json());
const port = 5000;

mongoose
  .connect("mongodb://127.0.0.1:27017/netflix")
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => console.log("error" + error.message));

app.use("/api/user", userRoutes);

app.listen(port, () => {
  console.log(`Server is started and running on port ${port}`);
});
