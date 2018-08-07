


var buttons = ["alpine skiing" , "snowboarding" , "pond skimming" , "figure skating"]
var apiKey= "fkBd6HbptND8N0pcjyIA7WfazYRv78Cv"

    function renderButtons() {
         $("#buttons").empty();
        for(var i=0; i < buttons.length; i++) {
        var newWinterSports = $("<buttons>");
        newWinterSports.addClass("snowSports");
        newWinterSports.attr("data newWinterSports", buttons[i]);
        newWinterSports.text(buttons[i]);
        $("#buttons").append(newWinterSports);
        }
    }

       // from button triggerd- ajax solution /////////////////////
          // Event listener for all button elements
    $("#buttons").on("click", function(event) {

      event.preventDefault();

        // This line will grab the text from the input box
        var winterSports = $("#winterSports").val().trim();
        // The movie from the textbox is then added to our array
        winterSports.push(winterSport);

        // calling renderButtons which handles the processing of our movie array
        renderButtons();
      });

      // Calling the renderButtons function at least once to display the initial list of movies
      renderButtons();


  
        // Constructing a URL to search Giphy for the name of the person who said the quote
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
          newWinterSports + "&api_key=fkBd6HbptND8N0pcjyIA7WfazYRv78Cv&limit=10";
  
        // Performing our AJAX GET request
        $.ajax({
          url: queryURL,
          method: "GET"
        })
          // After the data comes back from the API
          .then(function(response) {
            
            // Storing an array of results in the results variable
            var results = response.data;
            console.log (response)
            // Looping over every result item
            for (var i = 0; i < buttons.length; i++) {
  
              // Only taking action if the photo has an appropriate rating
              if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
                // Creating a div with the class "item"
                var gifDiv = $("<div class='item'>");
  
                // Storing the result item's rating
                var rating = results[i].rating;
  
                // Creating a paragraph tag with the result item's rating
                var p = $("<p>").text("Rating: " + rating);
  
                // Creating an image tag
                var winterSportsImage = $("<img>");
  
                // Giving the image tag an src attribute of a proprty pulled off the
                // result item

                winterSportsImage.attr("src", results[i].images.fixed_height.url);
  
                // Appending the paragraph and winterSportImage we created to the "gifDiv" div we created
                gifDiv.append(p);
                gifDiv.append(winterSportsImage);
  
                // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
                $("#gifs-appear-here").prepend(gifDiv);
             
        
            $(".gif").on("click", function() {
            // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
            var state = $(this).attr("data-state");
            // If the clicked image's state is still, update its src attribute to what its data-animate value is.
            // Then, set the image's data-state to animate
            // Else set src to the data-still value
            if (state === "still") {
              $(this).attr("src", $(this).attr("data-animate"));
              $(this).attr("data-state", "animate");
            } else {
              $(this).attr("src", $(this).attr("data-still"));
              $(this).attr("data-state", "still");
            }
          });
        }



        
        




