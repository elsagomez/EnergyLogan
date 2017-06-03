// var fixtureNames= ["t8 tubes", "t5 tubes","some shit"];

$(document).ready(function() {

// var fixtureNames= 

// $.ajax({
//   url: "public/js/autocomplete.json",
//   dataType: "json",
//   type: "get",
//   cache: "false",
//   success: function(data){
//     $(data.fixtures).each(function(index,value){
//       console.log(value.description);
//       return{
//         desciption: value.description
//       }
//     })
//   }
// })

// console.log(fixtureNames);
// $("#fixture").autocomplete({source: fixtureNames});


// $("#fixture").autocomplete({
//     source: function (request, response) {
//         $.getJSON("autocomplete.json", {
//             term: request.term
//         }, response);
//     },
//     minLength: 2,
//     select: function(event, ui) {
//         log(ui.item ? "Selected: " + ui.item.value + " aka " + ui.item.id : "Nothing selected, input was " + this.value);
//     }
// });







// ( "#fixture" ).autocomplete({
// source: function( request, response ) {
//     $.ajax({
//         url: "autocomplete.json",
//         dataType: "json",
//         data: {term: request.term},
//         success: function(data) {
//             response($.map(data, function(item) {
//                 return {
//                     description: item.description
//                 };
//             }));
//         }
//     });
// },
// minlength:3
// });



// // $( function() {

 
//     $( "#fixture" ).autocomplete({
//       source: function (request, response) {
//          let term = request.term
//         $.getJSON("/api/search/"+ term, response);
//     },
//     minLength: 2,
//     select: function(event, ui) {
//         log(ui.item ? "Selected: " + ui.item.value + " aka " + ui.item.id : "Nothing selected, input was " + this.value);
//     }
//     });
  // } );

     


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

    var row = $("<tr>");
    var td = $("<td>" + newRoomLine.room + "</td>");
                row.append(td);
    var td = $("<td>" + newRoomLine.fixture + "</td>");
                row.append(td);
    var td = $("<td>" + newRoomLine.qty + "</td>");
                row.append(td);

    $("tbody").prepend(row);

    


 }

});

