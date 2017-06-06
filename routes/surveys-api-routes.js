var db = require("../models");

module.exports = function(app) {
  // // Find all Surveys and return them to the user with res.json
  // app.get("/api/surveys", function(req, res) {
  //   db.Surveys.findAll({}).then(function(dbSurvey) {
  //     res.json(dbSurvey);
  //   });
  // });

  app.get("/api/surveys", function(req, res) {
    db.Surveys.findAll({}).then(function(dbSurvey) {
      res.json(dbSurvey);
    });
  });


//GOOD!! 
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

app.get("/api/projects/progress/:id", function(req, res) {
    var floors;
     //find number of floors planned on projects table, and count number of unique floors worked on in surveys table
    db.Surveys.findAll({
      where: {
        project_id: req.params.id
      }, include: [Projects]
    }).then(function(dbSurvey) {
              res.json(dbSurvey);
            });
          });

          // app.get("/api/projects/:id", function(req, res) {

      //   db.Surveys.findAll({
      //     where: {
      //       project_id: req.params.id
      //     },include: [Projects]
      //   }).then(function(dbSurvey) {
      //     res.json(dbSurvey);
      //   });
      // });

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
