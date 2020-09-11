const express = require("express");
const app = express(); // create express app;
const cors = require('cors')

app.use(cors())

app.use(express.static("public"));


app.get("/", (req, res) => {
  res.send("This is from express.js");
});

// start express server on port 5000
app.listen(5000, () => {
  console.log("server started on port 5000");
});