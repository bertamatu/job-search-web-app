const express = require("express");
const cors = require("cors");
const scraper = require("./scrapping");

const app = express();

app.use(cors());

const port = process.env.PORT || 3333;

app.get("/", (req, res) => {
  res.json({ message: "This is hello from app.js '/' route" });
});

// http://localhost:3000/search/SEARCH-TERM // -- works
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
