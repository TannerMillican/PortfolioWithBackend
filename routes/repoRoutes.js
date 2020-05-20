var db = require("../models");

module.exports = (app) => {
    app.get("/api/projects", (req, res) => {
        db.Projects.findAll({}).then((allProjcets) => {
            res.json(allProjcets)
        })
    })
}