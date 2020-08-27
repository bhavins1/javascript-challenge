// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the UFO data from data.js
console.log(tableData);

tableData.forEach(ufosightings=> {
    var row = tbody.append("tr");
    Object.entries(ufosightings).forEach(([key,value]) => {
        var cell = row.append("td");
        cell.text(value);

    });
});

var form = d3.select("#form");

var filterButton = d3.select("#filter-btn");

var clearButton = d3.select("#clear-btn");

// Create event handlers 
filterButton.on("click", runEnter);
form.on("submit", runEnter);


// // Complete the event handler function for the form
function runEnter() {

// Prevent the page from refreshing
d3.event.preventDefault();
  
// Select the input element and get the raw HTML node
var inputElement = d3.select("#datetime");
var inputElement1 = d3.select("#city");
var inputElement2 = d3.select("#state");
var inputElement3 = d3.select("#country");
var inputElement4 = d3.select("#shape");


// Get the value property of the input element
var inputValue = inputElement.property("value");
var inputValue1 = inputElement1.property("value");
var inputValue2 = inputElement2.property("value");
var inputValue3 = inputElement3.property("value");
var inputValue4 = inputElement4.property("value");


   console.log(inputValue);
  console.log(tableData);

if (inputValue && inputValue1 && inputValue2 && inputValue3 && inputElement4) {
    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue)
                                .filter(tableData => tableData.city === inputValue1)
                                .filter(tableData => tableData.state === inputValue2)
                                .filter(tableData => tableData.country === inputValue3)
                                .filter(tableData => tableData.shape === inputValue4);
}
else if (inputValue && inputValue1 && inputValue2 && inputValue3) {
    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue)
                                .filter(tableData => tableData.city === inputValue1)
                                .filter(tableData => tableData.state === inputValue2)
                                .filter(tableData => tableData.country === inputValue4);
}
else if (inputValue && inputValue1 && inputValue2 && inputValue4) {
    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue)
                                .filter(tableData => tableData.city === inputValue1)
                                .filter(tableData => tableData.state === inputValue2)
                                .filter(tableData => tableData.shape === inputValue4);
}
else if (inputValue && inputValue1 && inputValue3 && inputValue4) {
    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue)
                                .filter(tableData => tableData.city === inputValue1)
                                .filter(tableData => tableData.country === inputValue3)
                                .filter(tableData => tableData.shape === inputValue4);
}
else if (inputValue && inputValue2 && inputValue3 && inputValue4) {
    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue)
                                .filter(tableData => tableData.state === inputValue2)
                                .filter(tableData => tableData.country === inputValue3)
                                .filter(tableData => tableData.shape === inputValue4);
}
else if (inputValue1 && inputValue2 && inputValue3 && inputValue4) {
    var filteredData = tableData.filter(tableData => tableData.city === inputValue1)
                                .filter(tableData => tableData.state === inputValue2)
                                .filter(tableData => tableData.country === inputValue3)
                                .filter(tableData => tableData.shape === inputValue4);
}
else if (inputValue && inputValue1 && inputValue2) {
    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue)
                                .filter(tableData => tableData.city === inputValue1)
                                .filter(tableData => tableData.state === inputValue2);
}
else if (inputValue && inputValue1 && inputValue3) {
    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue)
                                .filter(tableData => tableData.city === inputValue1)
                                .filter(tableData => tableData.country === inputValue3);
}
else if (inputValue && inputValue1 && inputValue4) {
    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue)
                                .filter(tableData => tableData.city === inputValue1)
                                .filter(tableData => tableData.shape === inputValue4);
}
else if (inputValue && inputValue2 && inputValue3) {
    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue)
                                .filter(tableData => tableData.city === inputValue1)
                                .filter(tableData => tableData.shape === inputValue4);
}
else if (inputValue && inputValue2 && inputValue4) {
    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue)
                                .filter(tableData => tableData.state === inputValue2)
                                .filter(tableData => tableData.shape === inputValue4);
}
else if (inputValue && inputValue3 && inputValue4) {
    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue)
                                .filter(tableData => tableData.country === inputValue3)
                                .filter(tableData => tableData.shape === inputValue4);
}
else if (inputValue1 && inputValue2 && inputValue3) {
    var filteredData = tableData.filter(tableData => tableData.city === inputValue1)
                                .filter(tableData => tableData.state === inputValue2)
                                .filter(tableData => tableData.country === inputValue3);
}
else if (inputValue1 && inputValue2 && inputValue4) {
    var filteredData = tableData.filter(tableData => tableData.city === inputValue1)
                                .filter(tableData => tableData.state === inputValue2)
                                .filter(tableData => tableData.shape === inputValue4);
}
else if (inputValue2 && inputValue3 && inputValue4) {
    var filteredData = tableData.filter(tableData => tableData.state === inputValue2)
                                .filter(tableData => tableData.country === inputValue3)
                                .filter(tableData => tableData.shape === inputValue4);
}
else if (inputValue && inputValue1) {
    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue)
                                .filter(tableData => tableData.city === inputValue1);
}
else if (inputValue && inputValue2) {
    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue)
                                .filter(tableData => tableData.state === inputValue2);
}
else if (inputValue && inputValue3) {
    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue)
                                .filter(tableData => tableData.country === inputValue3);
}
else if (inputValue && inputValue4) {
    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue)
                                .filter(tableData => tableData.shape === inputValue4);
}
else if (inputValue1 && inputValue2) {
    var filteredData = tableData.filter(tableData => tableData.city === inputValue1)
                                .filter(tableData => tableData.state === inputValue2);
}
else if (inputValue1 && inputValue3) {
    var filteredData = tableData.filter(tableData => tableData.city === inputValue1)
                                .filter(tableData => tableData.country === inputValue3);
}
else if (inputValue1 && inputValue4) {
    var filteredData = tableData.filter(tableData => tableData.city === inputValue1)
                                .filter(tableData => tableData.shape === inputValue4);
}
else if (inputValue2 && inputValue3) {
    var filteredData = tableData.filter(tableData => tableData.state === inputValue2)
                                .filter(tableData => tableData.country === inputValue3);
}
else if (inputValue2 && inputValue4) {
    var filteredData = tableData.filter(tableData => tableData.state === inputValue2)
                                .filter(tableData => tableData.shape === inputValue4);
}
else if (inputValue3 && inputValue4) {
    var filteredData = tableData.filter(tableData => tableData.country === inputValue3)
                                .filter(tableData => tableData.shape === inputValue4);
}
else          

var filteredData = tableData.filter(tableData => tableData.datetime === inputValue ||
    tableData.city === inputValue1 ||
    tableData.state === inputValue2 || 
    tableData.country === inputValue3 || 
    tableData.shape === inputValue4);

   console.log(filteredData);



   var newData = filteredData;

var tbody = d3.select("tbody");

tbody.html("");

newData.forEach(filteredufosightings=> {
    var row = tbody.append("tr");
    Object.entries(filteredufosightings).forEach(([key,value]) => {
        var cell = row.append("td");
        cell.text(value);

     });
 });
};

clearButton.on("click", runClear);

function runClear() {
    location.reload()
};
