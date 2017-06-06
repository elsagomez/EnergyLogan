$(document).ready(function() {

    var roomInput = $("#room")
    var fixtureInput = $("#fixture");
    var qtyInput = $("#num_fixture");
    var roomForm = $("#roomLine");

    $(roomForm).on("submit", handleLineSubmit);

    function handleLineSubmit(event) {
        event.preventDefault();
        // Wont submit the post if we are missing a room, fixture, or #of fixtures
        if (!roomInput.val().trim() || !fixtureInput.val().trim() || !qtyInput.val()) {
            alert("please fill out all fields");
            return;
        }

        // Constructing a newLine object to hand to the database
        var newRoomLine = {
            ProjectProjectId: parseInt($("#project_id").text()),
            room: roomInput.val().trim(),
            floor_number: $("#floor_number").text(),
            FloorFloorId: parseInt($("#floor_id").text()),
            fixture: fixtureInput.val().trim(),
            quantity: qtyInput.val().trim()
        };

        console.log(newRoomLine);

        // Grab the URL of the website
        var currentURL = window.location.origin;

        // AJAX post the data to the projects API. 
        $.post(currentURL + "/api/surveys", newRoomLine, function(data) {
            // alert("posted to surveys")
            window.location.href = "/newsurvey/" + parseInt($("#project_id").text()) + "/" + $("#floor_number").text();
        });
    }

    $("#nextFloor").click(function() {
        // alert('click')
        queryurl = window.location.origin + "/api/projects/" + parseInt($("#project_id").text());
        console.log(queryurl)
        $.get(queryurl, function(data, status) {
            console.log(data.floors)
            if (data.floors.indexOf($("#floor_number").text()) === data.floors.length) {
                alert('Survey Complete')
                window.location.href = "/technician-dashboard/"
            } else {
                nextFloorIndex = data.floors.split(",").indexOf($("#floor_number").text())
                console.log(nextFloorIndex)
                nextFloorIndex++;
                console.log(nextFloorIndex)
                nextFloorNumber = data.floors[nextFloorIndex]
                console.log(nextFloorNumber)

                window.location.href = "/newsurvey/" + parseInt($("#project_id").text()) + "/" + nextFloorNumber;
            }

        });

    });

    $("#gotofloor").click(function(event) {
        event.preventDefault();

        window.location = window.location.origin + "/newsurvey/" + parseInt($("#project_id").text()) + "/" + $("#goFloor").val().trim();
    });

});
