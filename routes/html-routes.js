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

  // TODO: decide whether to have page for all projects or, have partial handlebars for projects section to load on dashboard
  app.get("/projects", function(req, res) {
    db.Project.findAll({})
    .then(function(dbProject) {
      var hbsObject = {
      projects: dbProject
    };
    console.log(hbsObject);
    res.render("projects", hbsObject);
    });
  });

  // TODO: edit/audit project page

  // newsurvey route loads newsurvey.handlebars
  app.get("/newsurvey", function(req, res) {
    var hbsObject = {
      title: "Energy Logan Application: New Survey",
      css : '<link rel="stylesheet" type="text/css" href="css/style.css">'
    };
    res.render("newsurveyform",hbsObject);
  });

  // TODO: edit/audit survey page
};
