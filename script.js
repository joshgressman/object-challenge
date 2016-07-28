
//upload to GitHub
// implemantation instructions ... does this mean a README????
//average revenue per chain... how to display function .. possible new object with function value

var locations = []; // this array will hold your objects

// object constructor
//currios.. why do we need this.RegionState . vs this.state as in book?
function Region (state, revenue, locationCount){
this.state = state;
this.revenue = revenue;
this.locationCount = locationCount;
this.averageRevenue = function(){
return revenue / locationCount;
};
}
// object instances
var ilRegion = new Region('IL', 5000, 12);

var mnRegion = new Region('MN', 300, 3);

var nvRegion = new Region('NV', 25000, 1);
// push object instances to locations array
locations.push(ilRegion, mnRegion, nvRegion);

// DO NOT MODIFY THIS CODE
$(document).ready(function () {
  locations.forEach(function (element, index) {
    var $li = $('<li></li>');
    $li.append('<span>' +  element.state + '</span>');
    $li.append('<span>' +  element.revenue + '</span>');
    $li.append('<span>' +  element.locationCount + '</span>');
    $li.append('<span>' +  element.averageRevenue() + '</span>');
    $('ol').append($li);
  });
});

//Pizza For People Object Challenge
//
//You have been given the following data

//["IL", 5000, 12]
//["MN", 300, 3]
//["NV", 25000, 1]

//which represents the state, annual revenue, and number of locations for a pizza chain, Pizza For People.

//Pizza For People wants to use your object knowledge to

//display their locations as a list
//display the average amount of revenue per location for each chain
//Implementation Instructions
//Fork the repo for this project.
//Create an object constructor for each state (probably named something like State or Region). The object properties should include state, revenue, locationCount).
//Create a function, within the constructor, that calculates and returns the average revenue. Name this function averageRevenue.
//Create an instance of each object using the provided data.
