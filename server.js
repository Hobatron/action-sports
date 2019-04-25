const express = require("express");
const path = require("path");
const mongoose = require("mongoose")
const apiRoutes = require("./routes/apiRoutes");
const busboy = require('connect-busboy')
const busboyBodyParse = require('busboy-body-parser')

const PORT = process.env.PORT || 3001;
const app = express();

//File reader
app.use(busboy());
app.use(bodyParser.url)

// Define middleware here
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

mongoose.connect("mongodb://localhost/action-sports-db", {
  useNewUrlParser: true
});


/************Define API routes here************/

apiRoutes(app);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});