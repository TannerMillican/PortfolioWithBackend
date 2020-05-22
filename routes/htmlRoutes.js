var path = require("path");

module.exports = function(app) {


    app.get("/", (req, res) => {
      res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get("/contact", (req, res) => {
      res.sendFile(path.join(__dirname, "../public/contact.html"))
    })
  
    // Render 404 page for any unmatched routes
    // app.get("*", function(req, res) {
    //   res.render("404");
    // });
  };