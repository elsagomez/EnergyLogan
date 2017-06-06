$(document).ready(function() {
    /* global moment */

    // blogContainer holds all of our posts
    var projectsContainer = $(".projects-container");

    // $(document).on("click", "button.delete", handleProjectDelete);
    $(document).on("click", "button.view", handleProjectView);

    var projects;

    var url = window.location.search;


    $.get("/api/projects_chart", function(data) {
        console.log("Projects", data);
         projects = data;
        initializeGraphs();
    });

    function initializeGraphs() {
        projectsContainer.empty();
        var projectsToAdd = [];
        for (var i = 0; i < projects.length; i++) {
            projectsToAdd.push(createNewGraph(projects[i]));
        }
        projectsContainer.append(projectsToAdd);
    }

function createNewGraph(projects) {
    var newProjectPanel = $("<div>");
    newProjectPanel.addClass("col-md-4");
    var newProjectPanelHeading = $("<div>");
    newProjectPanelHeading.addClass("panel-heading");
    var viewBtn = $("<button>");
     // viewBtn.setAttribute("href","/");

    viewBtn.addClass("view btn btn-primary btn-warning center-block");
   

    viewBtn.text("View Project");
    // viewBtn.setAttribute("href","/");
    var newProjectTitle = $("<h3>");
    newProjectTitle.addClass("text-center");

    var newProjectAddress = $("<h5>");
    newProjectAddress.addClass("text-center");
    newProjectAddress.text(projects.address);
    newProjectAddress.css({
      // color: "blue",
      "margin-top":
      "-5px"
    });
    var newProjectPanelBody = $("<canvas>");
    newProjectPanelBody.addClass("panel-body doughnutChart");
    var newProjectBody = $("<h5>");
    newProjectBody.addClass("text-center");
    newProjectTitle.text(projects.customer + " ");
    newProjectPanel.append(newProjectPanelBody);
    newProjectPanelHeading.append(newProjectTitle);
    newProjectPanelHeading.append(newProjectAddress);
    newProjectPanelBody.append(newProjectBody);
    newProjectPanel.append(newProjectPanelHeading);

    newProjectPanel.append(newProjectPanelBody);
    newProjectPanel.data("projects", projects);

    renderGraph(newProjectPanelBody.get(0), projects);
    newProjectPanelHeading.append(viewBtn);
    return newProjectPanel;
  }

   function handleProjectView() {
     var currentProject = $(this)
      .parent()
      .parent()
      .data("projects");

      console.log(this);

      
    window.location.href = "/newsurvey/" + currentProject.project_id + "/" + currentProject.floorsSurvey;
  }

function renderGraph(canvas, projects){
	console.log(canvas);
var mychart = canvas.getContext("2d");
var doughnut = new Chart(mychart, {
    type: "doughnut",
    data: {
        labels: ["complete", "uncomplete"],
        datasets: [{
            data: [0, 100],
            backgroundColor: ["#f1c40f", "#eee"]
        }]
    },
    options: {
        cutoutPercentage: 60,
        legend: {
            display: false
        },
        // title: {
        //     display: true,
        //     text: "",
        //     position: "bottom"
        // },
        animation: {
            animateScale: true,
            onComplete: showPercentage

        }
    }
});

// $(document).ready(function() {
	var x = projects.floorsSurvey/projects.numberofFloors;
    doughnut.data.datasets[0].data[0] = x; // numerator/denominator || use sequalize to dynamically update data
    doughnut.data.datasets[0].data[1] = 1-x; // (denominator - numerator)/denominator;
    doughnut.options.title.text = "Progress";
    doughnut.update();
    // });




     $("#newproject").on("click", function(){
     window.location.href = "/newprojectform";
     });

function showPercentage() {
    var canvas = $(".doughnutChart");
    var context = canvas.get(0).getContext("2d");
    //console.log(canvas);
    //console.log(context);

    var cx = canvas.width / 2;
    var cy = canvas.height / 2;

    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.font = "14px calibri";
    context.fillStyle = 'black';
    context.fillText(doughnut.data.datasets[0].data[0] + "%", cx, cy);
};

}

// function handleProjectView() {
//      var currentProject = $(this)
//     console.log(this);
//     // var currentProject = $(this)
    

//     //   .data("projects");
//     // window.location.href = "/projects?project_id=" + currentProject.project_id;
//   }

});
