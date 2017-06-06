var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var session = require("express-session");
// Requiring passport as we've configured it
var passport = require("./config/passport");

// Sets up the Express App & Port
// =============================================================
var PORT = process.env.PORT || 8080;
var db = require("./models");

// Sets up the Express app to handle data parsing
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("./public"));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes =============================================================

require("./routes/html-routes.js")(app);
require("./routes/surveys-api-routes.js")(app);
require("./routes/projects-api-routes.js")(app);
require("./routes/floors-api-routes.js")(app);
require("./routes/login-api-routes.js")(app);

// Syncing our sequelize models and then starting our express app
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
