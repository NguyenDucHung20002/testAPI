require("dotenv").config();

require("./connectMongo");

const express = require("express");

const app = express();
app.get((req, res) => {
  res.send("hello");
});
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("server is running on port: " + PORT);
});
