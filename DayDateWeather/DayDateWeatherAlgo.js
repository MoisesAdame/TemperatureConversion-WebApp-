// TIME
function timeLocation(){
    // Location Module
    getLocation();

    // Time Module
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(timeLocation, 1000); 
    
    
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }else {
        document.getElementById("position").innerHTML = "Geolocation is not supported by this browser.";
    }
}

// POSITION

function showPosition(position) {
    // Obtaining and modifying position
    document.getElementById("position").innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;

    // Create a request variable and assign a new XMLHttpRequest object to it.
    var XMLHttpRequest = require('xhr2');
    var request = new XMLHttpRequest();


    // Open a new connection, using the GET request on the URL endpoint
    var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=' + position.coords.latitude + '&lon=' + position.coords.longitude + '&appid=7f95472e36ea55ab5f5e474665219d28';
    request.open('GET', apiUrl, true);

    request.onload = function () {
        var weatherObj = JSON.parse(request.response);
        document.getElementById("weather").innerHTML = (weatherObj.main.temp - 273.15) +  "ºC";
        console.log(weatherObj.main.temp - 273.15);
    }

    // Send request
    request.send();
}