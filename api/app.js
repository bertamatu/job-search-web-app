const express = require("express"); // -- returns a function
const cors = require("cors");
const scraper = require("./scrapping");

const app = express(); // -- returns an object of type express

app.use(cors()); // -- that any front-end client could make a request

const port = process.env.PORT || 3333; // -- environment variable PORT or manual port

app.get("/", (req, res) => {
  res.json({ message: "This is hello from app.js '/' route" });
});

// http://localhost:3000/search/SEARCH-TIME // -- works
app.get("/search/:jobTitle", (req, res) => {
  scraper.searchJobs(req.params.jobTitle).then((jobs) => {
    res.json(jobs);
  });
});

app.listen(port, (error) => {
  if (error) {
    return console.log(error);
  }
  console.log(`Server listening on http://localhost: ${port}`);
});

module.exports = { app };
