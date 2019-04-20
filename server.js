const express = require("express");
const path = require("path");
const axios = require('axios');
const mongoose = require("mongoose")

const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

mongoose.connect("mongodb://localhost/action-sports-db", {useNewUrlParser: true});


// Define API routes here

app.get('/api/maps', (req, res) => {
  let queryReviewURL = "https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJVZiQSzr4wIcR6DwKBkAZodA&key=AIzaSyDK47iRJeeV1kj_xv-U2ZoPO-Lk7UnVyHM"

  axios({
    method: 'get',
    url: queryReviewURL
  })
    .then(function(response) {
      res.json(response.data);
    })
})

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
