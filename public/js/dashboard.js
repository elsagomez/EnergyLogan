$(document).ready(function() {
    /* global moment */

    // blogContainer holds all of our posts
    var projectsContainer = $(".projects-container");

    // $(document).on("click", "button.delete", handleProjectDelete);
    // $(document).on("click", "button.edit", handleProjectView);

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
    var newPostPanel = $("<div>");
    newPostPanel.addClass("col-md-4");
    var newPostPanelHeading = $("<div>");
    newPostPanelHeading.addClass("panel-heading");
    var editBtn = $("<button>");
    editBtn.text("View Project");
    editBtn.addClass("edit btn btn-info");
    var newPostTitle = $("<h3>");
    var newPostDate = $("<small>");
    var newPostAuthor = $("<h5>");
    newPostAuthor.text(projects.address);
    newPostAuthor.css({
      float: "left",
      color: "blue",
      "margin-top":
      "-5px"
    });
    var newPostPanelBody = $("<canvas>");
    newPostPanelBody.addClass("panel-body doughnutChart");
    var newPostBody = $("<p>");
    newPostTitle.text(projects.customer + " ");
    newPostBody.text("aqui la grafica");
  
    
    newPostPanelHeading.append(editBtn);
    newPostPanelHeading.append(newPostTitle);
    newPostPanelHeading.append(newPostAuthor);
    newPostPanelBody.append(newPostBody);
    newPostPanel.append(newPostPanelHeading);
    newPostPanel.append(newPostPanelBody);
    newPostPanel.data("post", projects);
    renderGraph(newPostPanelBody.get(0), projects);
    return newPostPanel;
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
        title: {
            display: true,
            text: "",
            position: "bottom"
        },
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
    doughnut.options.title.text = "Project 1";
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

});
