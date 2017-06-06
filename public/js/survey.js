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
            ProjectProjectId: {
                { project_id } },
            PrefixturePreFixID: roomInput.val().trim(),
            floor: {
                { floor_number } },
            prefixture_id: fixtureInput.val().trim(),
            quantity: qtyInput.val().trim()
        };

        console.log(newRoomLine.room);
    }

    $("#nextFloor").onClick(function{
        queryurl= "/api/projects/"+
         $.get("/api/projects/", function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
    });

    })

});
