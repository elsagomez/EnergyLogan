

$(document).ready(function() {

 


        var roomInput = $("#room")
        var fixtureInput = $("#fixture");
        var qtyInput =$("#num_fixture");
        var roomForm = $("#roomLine");

        $(roomForm).on("submit", handleLineSubmit);

     function handleLineSubmit(event){
        event.preventDefault();
        // Wont submit the post if we are missing a room, fixture, or #of fixtures
        if (!roomInput.val().trim() || !fixtureInput.val().trim() || !qtyInput.val()) {
            alert("please fill out all fields");
          return;
        }
 // Constructing a newLine object to hand to the database
    var newRoomLine = {
      room: roomInput
        .val(),
      fixture: fixtureInput
        .val(),
      qty: qtyInput.val().trim()
    };

    console.log(newRoomLine.room);

    var currentURL = window.location.origin;

     $.post(currentURL + "/api/surveys", projectData, function(data) {
                
                    alert("posted to surveys");
                    window.location.href = "/dashboard";

                  
                });



    var row = $("<tr>");
    var td = $("<td>" + newRoomLine.room + "</td>");
                row.append(td);
    var td = $("<td>" + newRoomLine.fixture + "</td>");
                row.append(td);
    var td = $("<td>" + newRoomLine.qty + "</td>");
     row.append(td);
    var td = $("<button>X</button>");
                row.append(td);

    $("tbody").prepend(row);

    


 }

});

