var topics = ["hi"];

for(var i = 0; i < topics.length; i++){
    $("#buttonDiv").append("<button id="+topics[i]+">"+topics[i]+"<button>");
}

$("button").on("click", function() {
    $("#gifs-appear-here").empty();
    var thisButton = $(this).attr("id");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + thisButton + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    })
    // After the data comes back from the API
    .then(function(response) {
        // Storing an array of results in the results variable
        var results = response.data;

        // Looping over every result item
        for (var i = 0; i < results.length; i++) {

          // Only taking action if the photo has an appropriate rating
          if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
            // Creating a div for the gif
            var gifDiv = $("<div>");

            // Storing the result item's rating
            var rating = results[i].rating;

            // Creating a paragraph tag with the result item's rating
            var p = $("<p>").text("Rating: " + rating);

            // Creating an image tag
            var personImage = $("<img>");

            // Giving the image tag an src attribute of a proprty pulled off the
            // result item
            personImage.attr("src", results[i].images.fixed_height.url);

            // Appending the paragraph and personImage we created to the "gifDiv" div we created
            gifDiv.append(p);
            gifDiv.append(personImage);

            // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
            $("#gifs-appear-here").prepend(gifDiv);
          }
        }
      });

      //grab userTopic div using jQuery and take its value with .val() and store into a local variable
      //push the new topic into the array to add a button

      //to pause gif, look at each gifs use the api to find the still image version of the gif,
      //replace the src of each img with the still version
      //do opposite to reanimate gif

      //didn't have a lot of free time out of class to do this homework, So i have to leave it as pseudocode
})
