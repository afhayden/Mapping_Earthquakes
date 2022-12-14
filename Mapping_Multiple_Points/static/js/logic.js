// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 4);

// Create the map object with a center and zoom level.
// let map = L.map("mapid", {
//     center: [
//       40.7, -94.5
//     ],
//     zoom: 14
//   });

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

//  Add a marker to the map for Los Angeles, California.
//let marker = L.marker([34.0522, -118.2437]).addTo(map);

// L.circle([34.0522, -118.2437], {
//   radius: 100
// }).addTo(map);

// L.circle([34.0522, -118.2437], {
//   radius: 300,
//   fillOpacity: 0.75,
//     color: "black",
//     fillColor: "pink"
// }).addTo(map);

// L.circleMarker([34.0522, -118.2437], {
//   radius: 300,
//   color: "black",
//   fillColor: '#ffffa1'
// }).addTo(map);

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// An array containing each city's location, state, and population.
// Get data from cities.js
let cityData = cities;
console.log(cities);
const numberFormatter = Intl.NumberFormat('en-US');

cityData.forEach(city => {
  console.log(city);
  L.circleMarker(city.location, {
    radius: city.population/200000,
    weight: 4,
    fillOpacity: 0.25,
    color: '#ff9933',
    fillColor: '#ff9933'
  }).addTo(map)
  .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + numberFormatter.format(city.population) + "</h3>")
  .addTo(map);
});