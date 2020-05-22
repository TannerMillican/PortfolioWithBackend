var db = require("../models");

module.exports = (app) => {
    app.get("/api/projects", (req, res) => {
        db.repos.findAll({}).then((allProjcets) => {
            res.json(allProjcets)
        })
    })
}