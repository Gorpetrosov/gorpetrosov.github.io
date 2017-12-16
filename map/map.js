
/////////////////////////unmarked map example
// var map;
// function initMap() {
    // map = new google.maps.Map(document.getElementById('map'), {
    //     center: {lat: 40.8188476, lng: 44.2256794},
    //     zoom: 13
    // });
// }

// marked map with one position
    // function initMap() {
    //     var uluru = {lat: 40.8188476, lng: 44.2256794};
    //     var map = new google.maps.Map(document.getElementById('map'), {
    //         zoom: 13,
    //         center: uluru
    //     });
    //     var marker = new google.maps.Marker({
    //         position: uluru,
    //         map: map
    //     });
    // }
// marked map with a lot of positions
// var map;
// function initMap() {
//     map = new google.maps.Map(document.getElementById('map'), {
//         zoom: 2,
//         center: new google.maps.LatLng(2.8,-187.3),
//         mapTypeId: 'terrain'
//     });
//
//     // Create a <script> tag and set the USGS URL as the source.
//     var script = document.createElement('script');
//     // This example uses a local copy of the GeoJSON stored at
//     // http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
//     script.src = 'https://developers.google.com/maps/documentation/javascript/examples/json/earthquake_GeoJSONP.js';
//     document.getElementsByTagName('head')[0].appendChild(script);
// }
//
// // Loop through the results array and place a marker for each
// // set of coordinates.
// window.eqfeed_callback = function(results) {
//     for (var i = 0; i < results.features.length; i++) {
//         var coords = results.features[i].geometry.coordinates;
//         var latLng = new google.maps.LatLng(coords[1],coords[0]);
//         var marker = new google.maps.Marker({
//             position: latLng,
//             map: map
//         });
//     }
// }

// ask user for geolocation

//
// function initMap() {
//     var map = new google.maps.Map(document.getElementById('map'), {
//         center: {lat: -34.397, lng: 150.644},
//         zoom: 6
//     });
//     var infoWindow = new google.maps.InfoWindow({map: map});
//
//     // Try HTML5 geolocation.
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(function(position) {
//             var pos = {
//                 lat: position.coords.latitude,
//                 lng: position.coords.longitude
//             };
//
//             infoWindow.setPosition(pos);
//             infoWindow.setContent('Location found.');
//             map.setCenter(pos);
//         }, function() {
//             handleLocationError(true, infoWindow, map.getCenter());
//         });
//     } else {
//         // Browser doesn't support Geolocation
//         handleLocationError(false, infoWindow, map.getCenter());
//     }
// }
//
// function handleLocationError(browserHasGeolocation, infoWindow, pos) {
//     infoWindow.setPosition(pos);
//     infoWindow.setContent(browserHasGeolocation ?
//         'Error: The Geolocation service failed.' :
//         'Error: Your browser doesn\'t support geolocation.');
// }