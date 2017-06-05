var db = require("../models");

module.exports = function(app) {

  app.post("/api/floors", function(req, res) {
     // Create an Floor row with the data available to us in req.body
    console.log(req.body);
    db.Floors.create(req.body).then(function(dbFloor) {
      res.json(dbFloor);
      })
    });
 
};
