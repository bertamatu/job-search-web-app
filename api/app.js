const express = require("express"); // -- returns a function
const cors = require("cors");
const scrapeWeb = require("./scrapping.js");

const app = express(); // -- returns an object of type express

app.use(cors()); //that any front-end client could make a request

const port = process.env.PORT || 3000; // -- environment variable PORT or manual port

app.get("/", (req, res) => {
  res.send("response from ' / ' ");
});

app.get("/api/jobs", (req, res) => {
  res.send("/api/jobs response!!!");
});

app.listen(port, (error) => {
  if (error) {
    return console.log(error);
  }
  console.log(`Server listening on http://localhost: ${port}`);
});
