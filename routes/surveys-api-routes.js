var db = require("../models");

module.exports = function(app) {
  // Find all Projects and return them to the user with res.json
  app.get("/api/surveys", function(req, res) {
    db.Survey.findAll({}).then(function(dbSurvey) {
      res.json(dbSurvey);
    });
  });

  app.get("/api/surveys/:id", function(req, res) {
     // find all survey data by project id
    db.Survey.findOne({
      where: {
        project_id: req.params.id
      }
    }).then(function(dbSurvey) {
      res.json(dbSurvey);
    });
  });

  app.post("/api/surveys", function(req, res) {
     // Create an Survey with the data available to us in req.body
    console.log(req.body);
    db.Survey.create(req.body).then(function(dbSurvey) {
      res.json(dbSurvey);
    });
  });

  app.delete("/api/surveys/:id", function(req, res) {
    // Delete the Survey with the id available to us in req.params.id
    db.Survey.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbSurvey) {
      res.json(dbSurvey);
    });
  });

};
