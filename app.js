// import data from data.js
var sightings = data;

// create variable for filter button id="filter-btn"
var button = d3.select("#filter-btn");

// what to do when you click hte filter button
button.on("click", function() {
    // get input from datetime form
    var input = d3.select("#datetime").property("value");

    // find table
    var table = d3.select("#ufotable")

    // remove any rows that already exist in the body of the table
    table.selectAll("tr").remove()

    // filter data based on input
    var filteredData = sightings.filter(sighting => sighting.datetime === input);

    // for each object in the filtered data, add it to the table
    filteredData.forEach((thing) => {

        var newRow = table.append("tr");
        Object.entries(thing).forEach(([key, value]) => {
            newRow.append("td").text(value);
        });
    });   
  
});