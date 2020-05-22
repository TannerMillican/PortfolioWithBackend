require("dotenv").config();
var express = require("express");
var path = require("path");

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 8000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));


app.set("views", path.join(__dirname, "public"));
app.set("view engine", "html");
app.engine("html", require("ejs").renderFile);

// Routes
require("./routes/repoRoutes")(app);
require("./routes/htmlRoutes")(app);

var syncOptions = { force: false };

if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;