// heros
var topics = ["spiderman", "superman", "batman", "the flash", "wonder woman",  "thor", "green lantern", "the joker"]

// buttons
var topicButton = function () {
    $("#generated-buttons").empty();

    for (let i = 0; i < topics.length; i++) {
        var button = $('<button class="generated-button btn btn-primary">');
        button.attr("data-name", topics[i]);
        button.text(topics[i].toUpperCase());

        $("#generated-buttons").append(button);
    }
}

topicButton();



// api keys



$(".generated-button").on("click", function () {

    var gifName = $(this).attr("data-name");
    var queryUrl = "https://api.giphy.com/v1/gifs/search?q=" + gifName + "&api_key=" + "wKQyZGChfARP7YE3fu38Z0u5RjBYoTkR" + "&limit=10&rating=g";

    $.ajax({
        method: 'GET',
        url: queryUrl
    }).then(function (response) {

        $("#gifLoader").empty();

        var results = response.data;
        console.log(results);

        for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div class='item col-md-4'>");

            var rating = results[i].rating;

            var p = $("<p>").text("Rating: " + rating);

          
        });
});