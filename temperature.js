/* 
TODO: Pass the temperature back up appropriately
TODO: Turn this method into one that takes params
*/

function getTemperature() {
    const jsdom = require("jsdom");
    const { JSDOM } = jsdom;
    const virtualConsole = new jsdom.VirtualConsole();

    let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    let request = new XMLHttpRequest();
    request.addEventListener("load", function(evt){
        console.log(evt);
    }, false);

    request.open('GET', 'https://www.wunderground.com/weather/us/nh/hanover', true);
    request.send(null);
    request.onreadystatechange = function() {
        if (request.readyState == 4) {
            const myUnparsedHTML = request.responseText;
            const dom = new JSDOM(myUnparsedHTML, { virtualConsole });
            const document = dom.window.document;
            console.log(document.querySelector(".wu-unit-temperature").textContent);
        }
    };
}

getTemperature();