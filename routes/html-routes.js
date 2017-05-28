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
    res.render("index");
  });

  // TODO: login route loads login
  app.get("/login", function(req, res) {
    res.render("login");
  });

  // TODO: dashboard

  // newprojectform route loads newprojectform.handlebars
  app.get("/newprojectform", function(req, res) {
    res.render("newprojectform");
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

  // TODO: edit/audit project page

  // newsurvey route loads newsurvey.handlebars
  app.get("/newsurvey", function(req, res) {
    res.render("newsurvey");
  });

  // TODO: edit/audit survey page 


};
