const APIkey = "AIzaSyBbGlgrbYUOVKntBDbCnVlEZrVYAA7VYpY";
const proxy = "https://cors-anywhere.herokuapp.com/";
var map;
var service;
var infowindow;
const allCoordinates = [];

// function runLocation(startLat, startLong) {
//     // let latArray = [];
//     // let longArray = [];
//     // Ajax request to my own API routes 'userlocation'
//     var geolocationURL = `${proxy}https://maps.googleapis.com/maps/api/place/textsearch/json?query=park&location=${startLat},${startLong}&radius=16000&key=${APIkey}`
//     $.ajax({
//         url: geolocationURL,
//         method: "GET"
//     }).then(function (response) {
//         console.log(response)
//     })
// }

function initMap() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            const myLocation = { lat: position.coords.latitude, lng: position.coords.longitude };

            allCoordinates.push(myLocation);
            // *****
            // get all other locations here, and push coordinate object to the array
            // *****

            // for(let i = 0; i < allCoordinates.length; i++) {
            //     addMarker(allCoordinates[i].lat, allCoordinates[i].lng);
            // }

            const centerCoords = averageGeolocation(allCoordinates);

            infowindow = new google.maps.InfoWindow();

            map = new google.maps.Map(document.getElementById('map'), {
                zoom: 15,
                center: { lat: centerCoords.lat, lng: centerCoords.lng }
            });
            // map = new google.maps.Map(
            //     document.getElementById('map'), {center: centerLocation, zoom: 15});
            var centerLocation = new google.maps.LatLng(centerCoords.lat, centerCoords.lng);
            var request = {
                locationBias: centerLocation,
                query: 'park',
                fields: ['name', 'geometry'],
            };
            service = new google.maps.places.PlacesService(map);

            service.findPlaceFromQuery(request, function (results, status) {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    console.log(results);
                    for (var i = 0; i < results.length; i++) {
                        createMarker(results[i]);
                    }
                    console.log(results)
                    map.setCenter(results[0].geometry.location);
                }
            });

            function createMarker(place) {
                var marker = new google.maps.Marker({
                    map: map,
                    position: place.geometry.location
                });

                google.maps.event.addListener(marker, 'click', function () {
                    infowindow.setContent(place.name);
                    infowindow.open(map, this);
                });
            }
                // runLocation(centerCoords.lat, centerCoords.lng);
            });
    };
}

// function addMarker(latitude, longitude){
//     console.log( `new marker: ${latitude}, ${longitude}`);
//     var marker = new google.maps.Marker({
//         position: {lat: latitude, lng: longitude},
//         visible: true
//     });
//     marker.setMap(map);
// }

function centerMap(latitude, longitude) {
    map.setCenter(new google.maps.LatLng(latitude, longitude));
}


/**
 * Calculate the center/average of multiple GeoLocation coordinates
 * Expects an array of objects with .latitude and .longitude properties
 *
 * @url http://stackoverflow.com/a/14231286/538646
 */
function averageGeolocation(coords) {
    if (coords.length === 1) {
        return coords[0];
    }

    let x = 0.0;
    let y = 0.0;
    let z = 0.0;

    for (let coord of coords) {
        let latitude = coord.lat * Math.PI / 180;
        let longitude = coord.lng * Math.PI / 180;

        x += Math.cos(latitude) * Math.cos(longitude);
        y += Math.cos(latitude) * Math.sin(longitude);
        z += Math.sin(latitude);
    }

    let total = coords.length;

    x = x / total;
    y = y / total;
    z = z / total;

    let centralLongitude = Math.atan2(y, x);
    let centralSquareRoot = Math.sqrt(x * x + y * y);
    let centralLatitude = Math.atan2(z, centralSquareRoot);

    return {
        lat: centralLatitude * 180 / Math.PI,
        lng: centralLongitude * 180 / Math.PI
    };
}
