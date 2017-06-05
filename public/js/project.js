
        // Chosen CSS
        var config = {
            '.chosen-select': {},
            '.chosen-select-deselect': {
                allow_single_deselect: true
            },
            '.chosen-select-no-single': {
                disable_search_threshold: 10
            },
            '.chosen-select-no-results': {
                no_results_text: 'Oops, nothing found!'
            },
            '.chosen-select-width': {
                width: "95%"
            }
        }
        for (var selector in config) {
            $(selector).chosen(config[selector]);
        }

        // Capture the form inputs 
        $("#submit").on("click", function() {

            // Form validation
            function validateForm() {
                var isValid = true;
                $('.form-required').each(function() {
                    if ($(this).val() === '')
                        isValid = false;
                });

                $('.chosen-select').each(function() {

                    if ($(this).val() === "")
                        isValid = false
                })
                return isValid;
            }

            // If all required fields are filled
            if (validateForm() == true) {
                // Create an object for the user's data
                var projectData = {
                    project_name: $("#project_name").val(),
                    customer: $("#customer").val(),
                    address: $("#address").val(),
                    contact_name: $("#contact_name").val(),
                    contact_number: $("#contact_number").val(),
                    account_number: $("#account_number").val(),
                    floors: $("#floors").val(),
                    scheduled_date: $("#scheduled_date").val(),
                    comments: $("#comments").val()
                };


                var floorsArr = $("#floors").val().split(", ")

                // Grab the URL of the website
                var currentURL = window.location.origin;

                // AJAX post the data to the projects API. 
                $.post(currentURL + "/api/projects", projectData, function(data) {
                
                    alert("posted to projects")

                    // for each floor in floorsArr, post a new row in Floors table
                    for (var i = 0; i < floorsArr.length; i++) {
                        var floorData ={
                            floor_number: floorsArr[i],
                            ProjectProjectId: data.project_id
                        };
                       
                        $.post(currentURL + "/api/floors", floorData, function(data) {
                            console.log('sucessfully posted to floors databse')
                        });
                    };
                }).then(function(results){
                     res.redirect("/");
                });

               



               
            } else {
                alert("Please fill out all fields before submitting!");
            }

            return false;
        });