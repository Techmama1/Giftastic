


var buttons = ["snowboarding" , "skiing" , "figure skating" , "hockey"]
var apiKey= "fkBd6HbptND8N0pcjyIA7WfazYRv78Cv"

    function renderButtons() {
         $("#buttons").empty();
        for(var i=0; i < buttons.length; i++) {
        var newWinterSport = $("<button>");
        newWinterSport.addClass("buttons");
        newWinterSport.attr("data-winterSport", buttons[i]);
        newWinterSport.text(buttons[i]);
        $("#buttons").append(newWinterSport);
        }
    }

     // This function handles events where one button is clicked
        $("#add-buttons").on("click", function(event) {
        // event.preventDefault() prevents the form from trying to submit itself.
        // We're using a form so that the user can hit enter instead of clicking the button if they want
        event.preventDefault();

        // This line will grab the text from the input box
        var buttons = $("#buttons-input").val().trim();
        // The buttons from the textbox is then added to our array
        buttons.push(buttons);

        // calling renderButtons which handles the processing of our winter sports array
        renderButtons();
    });

      // Calling the renderButtons function at least once to display the initial list of winter sports
      renderButtons();


        // This .on("click") function will trigger the AJAX Call

    $("#find-wintersports").on("click", function(event) {

        // event.preventDefault() can be used to prevent an event's default behavior.
        // Here, it prevents the submit button from trying to submit a form when clicked
        event.preventDefault();

        // Here we grab the text from the input box
        // Here we construct our URL
        var queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

    });

