$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "../resources/dataset.txt",
        dataType: "text",
        success: function(data) {processData(data);}
     });
});

function processData(allText) {
    var allTextLines = allText.split(/\r\n|\n/);
    var headers = allTextLines[1].split(',');
    var lines = [];

    for (var i=2; i<allTextLines.length-1; i++) {
        var data = allTextLines[i].split(',');
        if (data.length == headers.length) {

            var tarr = [];
            for (var j=0; j<headers.length; j++) {
                tarr.push(headers[j]+":"+data[j]);
            }
            lines.push(tarr);
        }
    }
    // alert(lines);
}

function createNewDataPoint(obj) {
  this.country = obj.country;
  this.region = obj.region;
  this.city = obj.city;
  this.postalCode = obj.postalCode;
  this.latitude = obj.latitude;
  this.longitude = obj.longitude;
  this.metroCode = obj.metroCode;
  this.areaCode = obj.areaCode;
}

(function(){
  var app = angular.module('heatMap', []);
  app.controller('MapController', function(){
    this.product = example;
  });

  var example = {
    country: "US",
    region: "NC",
    city: "Durham",
    postalCode: 27705,
    latitude: 36.0378,
    longitude: 36.0378,
    metroCode: 560,
    areaCode: 919,
  }

})();
