// import data from data.js
var sightings = data;

// create variable for filter button id="filter-btn"
var button = d3.select("#filter-btn");

// Create a basic HTML web page or use the index.html file provided (we recommend building your own custom page!).


// Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and then adds new rows of data for each UFO sighting.
// Make sure you have a column for date/time, city, state, country, shape, and comment at the very least.
// Use a date form in your HTML document and write JavaScript code that will listen for events and search through the date/time column to find rows that match user input.

sightings.forEach(function(sighting) {
    var table = d3.select("#ufotable")
    var newRow = table.append("tr")

    newRow.append("td").text(sighting.datetime);
    newRow.append("td").text(sighting.city);
    newRow.append("td").text(sighting.state);
    newRow.append("td").text(sighting.country);
    newRow.append("td").text(sighting.shape);
    newRow.append("td").text(sighting.durationMinutes);
    newRow.append("td").text(sighting.comments);

    
});