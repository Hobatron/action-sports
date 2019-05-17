const express = require("express");
const path = require("path");
const mongoose = require("mongoose")
const apiRoutes = require("./routes/apiRoutes");
// require("dotenv").config();


const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({
  extended: true
}));

app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//mongodb:localhost/action-sports-db
mongoose.connect("mongodb://asw:aswebdev1@ds137206.mlab.com:37206/heroku_2ztlncnk", {
  useNewUrlParser: true
}, () => {
  console.log("Connected");
});

// Define API routes here

/************Define API routes here************/
apiRoutes(app);


app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});