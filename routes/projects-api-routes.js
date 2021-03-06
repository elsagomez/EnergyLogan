var db = require("../models");

module.exports = function(app) {
  // Find all Projects and return them to the user with res.json
  app.get("/api/projects", function(req, res) {
    db.Projects.findAll({}).then(function(dbProject) {
     
      res.json(dbProject);

    });
  });

  app.get("/api/projects_chart", function(req, res) {
    db.Projects.findAll({raw:true}).then(function(dbProject) {

      function computeFloor(index){   
        console.log(index);
        if (index < dbProject.length){
          dbProject[index].numberofFloors = dbProject[index].floors.split(",").length;
      db.sequelize.query("SELECT COUNT(DISTINCT floor_number) F from Surveys WHERE ProjectProjectId=?",{
        replacements: [dbProject[index].project_id], 
        type: db.sequelize.QueryTypes.SELECT

    
  }).then(f=>{

    dbProject[index].floorsSurvey = f[0].F;
      computeFloor(index+1)
  })

        }
        else{
          res.json(dbProject);
        }
      }
      computeFloor(0);
      })
   

  });

  app.get("/api/projects/:id", function(req, res) {
     // Find one Project with the id in req.params.id and return them to the user with res.json
    db.Projects.findOne({
      where: {
        project_id: req.params.id
      }
    }).then(function(dbProject) {
      res.json(dbProject);
    });
  });



// app.get("/api/projects/progress/:id", function(req, res) {
//     var floors;
//      // Find one Project with the id in req.params.id and return them to the user with res.json
//     db.Projects.findOne({
//       where: {
//         project_id: req.params.id
//       }
//     }).then(function(dbProject) {
//       floors
//     });


//   });


  app.post("/api/projects", function(req, res) {
     // Create an Project with the data available to us in req.body
    console.log(req.body);
    db.Projects.create(req.body).then(function(dbProject) {
      res.json(dbProject);
      // res.redirect("/dashboard")

      // floor_names hazme un split y guardamelo en esta variable (array)

      // var array =[""] function{
      //   agarra cada elemento del array y conviertelo en un registro de la tabla floors

      })
    });
 

//     app.get("/api/search/:term", function(req, res) {
//       let term = req.params.term
      
//       if(term == undefined) {
//         console.log("HEY! ")
//       } else {
//         console.log(term)
// // let willie = {
// //   hola: "hi",
// //   chau: "bye"
// // }

// // res.json(willie)
// // }


//     db.Prefixtures.findAll({where: {

//     pre_type: "CFL"
    
//   }}).then(function(dbProject) {
//       res.json(dbProject[0]);
//       console.log(dbProject[0].Instance.dataValues);
//     });
        
//       }

//   });

  app.delete("/api/projects/:id", function(req, res) {
    // Delete the Project with the id available to us in req.params.id
    db.Projects.destroy({
      where: {
        project_id: req.params.id
      }
    }).then(function(dbProject) {
      res.json(dbProject);
    });
  });

};
