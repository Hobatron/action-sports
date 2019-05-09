const express = require("express");
const path = require("path");
const mongoose = require("mongoose")
const db = require("./model");
const apiRoutes = require("./routes/apiRoutes");
const moment = require("moment");


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

mongoose.connect("mongodb://localhost/action-sports-db", {
  useNewUrlParser: true
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