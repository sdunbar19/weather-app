
function getTemperatureFromZipcode(res, zipcode) {
    function queryTemperature(res, city, state, country) {
        const jsdom = require("jsdom");
        const { JSDOM } = jsdom;
        const virtualConsole = new jsdom.VirtualConsole();

        let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
        let request = new XMLHttpRequest();

        const url = "https://www.wunderground.com/weather/" + country + "/" + state + "/" + city
        console.log("LOG: Querying URL " + url);
        request.open('GET', url, true);
        request.send(null);
        request.onreadystatechange = function() {
            if (request.readyState === 4) {
                const status = request.status;
                console.log("LOG: Queried URL with status " + request.status);
                if (status === 0 || (status >= 200 && status < 400)) {
                    const myUnparsedHTML = request.responseText;
                    // silencing the CSS error (we don't care about CSS)
                    const dom = new JSDOM(myUnparsedHTML, { virtualConsole });
                    const document = dom.window.document;
                    temperature = document.querySelector(".wu-unit-temperature").textContent;
                    console.log("LOG: Found temperature " + temperature);
                    res.render('pages/index', {output: temperature});
                }
                else {
                    console.log("ERROR: Invalid status");
                    res.render('pages/index', {output: "Temperature error: status code " + request.status});
                };
            }
        };
    }

    function queryGoogleParseOutput(res, url, queryTemperature) {
        console.log("LOG: Querying URL " + url);
        const UNKNOWN_VAL = "!!UNKNOWN!!";
        const CITY = "locality";
        const STATE = "administrative_area_level_1";
        const COUNTRY = "country";
        let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
        let request = new XMLHttpRequest();
        request.open('GET', url, true);
        request.send(null);
        request.onreadystatechange = function() {
            if (request.readyState === 4) {
                const status = request.status;
                console.log("LOG: Queried Google API successfully with status " + status);
                if (status === 0 || (status >= 200 && status < 400)) {
                    obj = JSON.parse(request.responseText);
                    console.log("LOG: Google request status " + obj.status);
                    if (obj.status == "OK") {
                        const address_components = obj.results[0].address_components;
                        let city = UNKNOWN_VAL;
                        let state = UNKNOWN_VAL;
                        let country = UNKNOWN_VAL
                        for (const address_component of address_components) {
                            const types = address_component.types;
                            for (const type of types) {
                                if (type == CITY) {
                                    city = address_component.long_name;
                                }
                                if (type == STATE) {
                                    state = address_component.short_name;
                                }
                                if (type == COUNTRY) {
                                    country = address_component.short_name;
                                }
                            }
                        }
                        console.log("LOG: Found city as " + city + ", state as " + state + ", country as " + country);
                        if (city == UNKNOWN_VAL || state == UNKNOWN_VAL || country == UNKNOWN_VAL) {
                            console.log("ERROR: Invalid, city, state, or country")
                            res.render('pages/index', {output: "API error: Unparseable zip code"});
                        }
                        else {
                            queryTemperature(res, city, state, country);
                        }
                    }
                    else {
                        res.render('pages/index', {output: "API error: status " + obj.status});
                    }
                }
                else {
                    console.log("ERROR: Invalid status code");
                    res.render('pages/index', {output: "API error: status code " + request.status});
                };
            }
        };
    }

    function getURLFromZipcode(res, zipcode, queryGoogleParseOutput, queryTemperature) {
        const API_FILE_NAME = "keys.txt";
        const fs = require("fs");
        fs.readFile(API_FILE_NAME, (err, input) => {
            if (err) { throw err; }
            const urlAPI = input.toString(); 
            console.log("LOG: Successfully read API key " + urlAPI);
            const urlStart = "https://maps.googleapis.com/maps/api/geocode/json?address="
            const urlSensor = "&sensor=true&key="
            const url = urlStart + zipcode + urlSensor + urlAPI;
            queryGoogleParseOutput(res, url, queryTemperature);
        });
    }

    getURLFromZipcode(res, zipcode, queryGoogleParseOutput, queryTemperature)
}

module.exports = {
    getTemperature: getTemperatureFromZipcode
}