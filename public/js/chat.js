const APIkey = "AIzaSyBbGlgrbYUOVKntBDbCnVlEZrVYAA7VYpY"
const proxy = "https://cors-anywhere.herokuapp.com/"

window.addEventListener("load", function () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            console.log(position.coords.latitude, position.coords.longitude);
            var startLat = position.coords.latitude;
            var startLong = position.coords.longitude;
            runLocation(startLat, startLong)
        });
    };
});

function runLocation(startLat, startLong) {
    // let latArray = [];
    // let longArray = [];
    // Ajax request to my own API routes 'userlocation'
    var geolocationURL = `${proxy}https://maps.googleapis.com/maps/api/place/textsearch/json?query=park&location=${startLat},${startLong}&radius=16000&key=${APIkey}`
    $.ajax({
        url: geolocationURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)
    })
}