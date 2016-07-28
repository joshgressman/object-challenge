

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

