$(document).ready(function () {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function (data) {
    $(".member-name").text(data.email);
  });

  var sportButton = $("#sportButton");
  sportButton.on("click", function (event) {
    event.preventDefault();
    var sport = $("#sport").val();
    
    const newUrl = window.location.origin + '/chat/' + sport;
    window.location.href = newUrl;
  });

});
