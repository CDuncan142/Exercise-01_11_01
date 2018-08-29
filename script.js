/*  Exercise 01_11_01

    Whole Spectrum Energy Solutions
    Author: Conner Duncan
    Date:   08.28.18

    Filename: script.js
*/

"use strict";

// global variables
var selectedCity = "Tucson, AZ"; // default location
var weatherReport = null;

// get the weather on click events on city locations
// and for default city on page load
function getWeather(evt) {
    var latitude;
    var longitude;
    if (evt.type !== "load") {
        if (evt.target) {
            selectedCity = evt.target.innerHTML;
        } else if (evt.srcElement) {
            selectedCity = evt.srcElement.innerHTML;
        }
    }
    if (selectedCity === "Tucson, AZ") {
        latitude = 37.7577;
        longitude = -122.4376;
    } else if (selectedCity === "Chicago, IL") {
        latitude = 41.8337329;
        longitude = -87.7321555;
    } else if (selectedCity === "Montreal, QC") {
        latitude = 45.5601062;
        longitude = -73.7120832;
    }
//        switch(selectedCity) {
        //            case "Tucson, AZ":
        //            latitude = 37.7577;
        //            longitude = -122.4376;
        //            break;
        //            case "Chicago, IL":
        //            latitude = 41.8337329;
        //            longitude = -87.7321555;
        //            break;
        //            case "Montreal, QC":
        //            latitude = 45.5601062;
        //            longitude = -73.7120832;
        //            break;
        //        }
}

// retrieve li elements holding city location choices
var locations = document.querySelectorAll("section.locales ul li");
// add click event listeners to all city location elements
// event handler will be getWeather()
for (var i = 0; i < locations.length; i++) {
    if (locations[i].addEventListener) {
        locations[i].addEventListener("click", getWeather, false);
    } else if (locations[i].attachEvent) {
        locations[i].attachEvent("onclick", getWeather);
    }
}

// set load event listeners to getWeather for
// default location event handler
if (window.addEventListener) {
    window.addEventListener("load", getWeather, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", getWeather);
}
