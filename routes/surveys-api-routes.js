var db = require("../models");

module.exports = function(app) {
    //get all surveys
    app.get("/api/surveys", function(req, res) {
        db.Surveys.findAll({}).then(function(dbSurvey) {
            res.json(dbSurvey);
        });
    });

    // get one survey by id
    app.get("/api/surveys/:id", function(req, res) {
        // find all survey data by survey id
        db.Surveys.findAll({
            where: {
                survey_id: req.params.id
            }
        }).then(function(dbSurvey) {
            res.json(dbSurvey);
        });
    });

    // post survey
    app.post("/api/surveys", function(req, res) {
        // Create an Survey with the data available to us in req.body
        console.log(req.body);
        db.Surveys.create(req.body).then(function(dbSurvey) {
            res.json(dbSurvey);
        })
    });

    // delete one survey by id
    app.delete("/api/surveys/:id", function(req, res) {
        // Delete the Survey with the id available to us in req.params.id
        db.Surveys.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbSurvey) {
            res.json(dbSurvey);
        });
    });

};
