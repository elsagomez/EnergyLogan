// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads index.handlebars homepage
  app.get("/", function(req, res) {
    var hbsObject = {
      title: "Energy Logan Application",
      css : '<link rel="stylesheet" type="text/css" href="css/login.css">'
    };
    res.render("login",hbsObject);
  });

  // login route loads login page
  app.get("/login", function(req, res) {
    var hbsObject = {
      title: "Energy Logan Application",
      css : '<link rel="stylesheet" type="text/css" href="css/login.css">'
    };
    res.render("login",hbsObject);
  });

  // dashboard route loads dashboard page
  app.get("/dashboard", function(req, res) {
    var hbsObject = {
      title: "Energy Logan Application: Dashboard",
      css : '<link rel="stylesheet" type="text/css" href="css/dashboard.css">'
    };
    res.render("dashboard",hbsObject);
  });

  // newprojectform route loads newprojectform.handlebars
  app.get("/newprojectform", function(req, res) {
    var hbsObject = {
      title: "Energy Logan Application: New Project Form",
      css : '<!-- Chosen --> <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/chosen/1.5.1/chosen.css"> <script src="https://cdnjs.cloudflare.com/ajax/libs/chosen/1.5.1/chosen.jquery.min.js"></script>'
    };
    res.render("newprojectform",hbsObject);
  });

  // Office view for individual project
  app.get("/office/project/:project_id", function(req, res) {
    db.Surveys.findAll({
      where: {
        ProjectProjectId: req.params.project_id
      },
      include: [db.Projects]
    })
    .then(function(dbSurveys) {
      var hbsObject = {
      title: "Energy Logan Application: Project View",
      surveys: dbSurveys
    };
    console.log(hbsObject);
    res.render("project-officeview", hbsObject);
    // res.json(dbSurveys)
    });
  });

  // TODO: edit/audit project page

  // when technician selects project from dashboard, sends them here, which redirects to last floor updated
  app.get("/newsurvey/:project_id", function(req, res) {
    db.Floors.findAll({
      where: {
        ProjectProjectId: req.params.project_id
      },
      include: [db.Surveys]
    })
    .then(function(dbFloors) {
      //default case if no survey data added yet, start at floor index 0
      var indexOfLastFloorUpdated =0;
      //start at last floor and check if survey data exists. store index of last floor with survey data, break
      for (var i = dbFloors.length -1; i >=0 ; i--) {
        if (dbFloors[i].Surveys[0]) {
          indexOfLastFloorUpdated=i;
          break
        }
      }
      //redirect to /newsurvey/current project id/floor number where technician left off
      res.redirect("/newsurvey/"+dbFloors[0].ProjectProjectId+"/"+dbFloors[indexOfLastFloorUpdated].floor_number);
    // res.json(dbFloors)
    });
  });

  // newsurvey route loads newsurvey.handlebars
  app.get("/newsurvey/:project_id/:floor_number", function(req, res) {
    db.Surveys.findAll({
      where: {
        ProjectProjectId: req.params.project_id,
        floor_number: req.params.floor_number
      },
      include: [db.Projects]
    }) 
    .then(function(dbSurveys) {
      var hbsObject = {
        title: "Energy Logan Application: New Survey",
        css : '<link rel="stylesheet" type="text/css" href="../../css/style.css">',
        surveys: dbSurveys,
        floor_number: dbSurveys[0].floor_number,
        building: dbSurveys[0].Project.project_name
      };
      res.render("newsurveyform",hbsObject);
      // console.log()
      // res.json(dbSurveys[0])
    });
  });

  // TODO: edit/audit survey page

 app.get("/testdashboard", function(req, res) {
    db.Projects.findAll({
      include: [db.Floors, db.Surveys]
    })
    .then(function(dbProject) {
      var hbsObject = {
      title: "Energy Logan Application: Dashboard",
      projects: dbProject
    };
    console.log(hbsObject);
    // res.render("dashboard", hbsObject);
    res.json(dbProject)
    });
  });
};


