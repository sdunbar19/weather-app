# weather-app
Challenge #1 of https://hackr.io/blog/best-computer-science-projects

## USAGE
**IMPORTANT**: For this project to function, you must add a separate "keys.txt" file to the
upper level directory containing a Google Geocoding API key. 
For obvious reasons, I'm not publishing mine. See 
https://developers.google.com/maps/documentation/geocoding/overview

## TODOS
- Finish working on dynamically loading pages (try AJAX demo)
- Try to make functions global
- Get multiple methods of querying working
- Get some sort of loading working
- Get some sort of testing working, ideally not separate methods! Bare minimum test APIs are working as expected
- Look into amending commits
- Refactoring - figure out if this is even good style
- Get worldwide querying working?
- Get more information
- Get a testing framework built, CI/CD pipeline
- Organize this project better
- Get EJS-Lint working

## Major Bugs
- EJS syntax issues -> be careful about closing characters, get EJS-Lint to work
- Could not parse CSS stylesheet - see source below for solution
- Various problems with Google API

## Key Sources
- Express HelloWorld: https://expressjs.com/en/starter/hello-world.html 
- Rendering HTML in EJS: https://codeforgeek.com/render-html-file-expressjs/
- Intro to EJS: https://www.digitalocean.com/community/tutorials/how-to-use-ejs-to-template-your-node-application
- POSTing data to EJS: https://www.codespeedy.com/post-request-in-express-js/
- Scraping the HTML of a website: https://stackoverflow.com/questions/6375461/get-html-code-using-javascript-with-a-url
- JSDOM for emulate a browser: https://github.com/jsdom/jsdom - pointed to by https://stackoverflow.com/questions/10585029/parse-an-html-string-with-js
- Parse HTML with javascript: https://stackoverflow.com/questions/11398419/trying-to-use-the-domparser-with-node-js
- Could not parse CSS stylesheet: https://stackoverflow.com/questions/48830001/jsdom-could-not-parse-css-stylesheet
- Handling the request - documentation: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readystatechange_event
- Reading and writing files: https://www.tutorialspoint.com/how-to-read-and-write-a-file-using-javascript 
- Callback model of asynchronous functions: https://stackoverflow.com/questions/3760319/how-to-force-a-program-to-wait-until-an-http-request-is-finished-in-javascript
- Making POST requests from javascript (unsuccessful): https://stackoverflow.com/questions/6396101/pure-javascript-send-post-data-without-a-form 
- Making POST requests from javascript p2 (unsuccessful): https://stackoverflow.com/questions/45997158/send-post-request-from-express-js-server-to-another-express-js-server
- Making POST requests from javascript p3: https://stackoverflow.com/questions/45121440/redirect-to-new-page-after-ajax-post-request-using-express

## Stretch Goals
- Autocomplete
- Use bootstrap for the CSS (simple but clean)
- Get the "conditions" and change the background based on the conditions
- Put the unidentified conditions and other details in a backing google sheet
- Change the background based on time
- Automatically choose a zip code based on the user's IP address

## Project Log
### 4/24/23
12:15 - 1:20pm
- Installed Node.js
- Started following tutorials to build a rudimentary webapp

### 4/25/23
5:00 - 6:30pm
- Got a framework with Express and EJS working

### 4/26/23
11:10am - 12:20pm
- Scoped out workflow for getting information
    - Use google geocoding API to get city, state, country from provided zipcode
    - Use Wunderground URL (which takes city, state, country, zipcode) to scrape temperature and return
    - Display temperature in the frontend
- Got the Wunderground scraping working as a proof of concept

### 4/27/23
4:20 - 6:20pm
- Put all the pieces together re: mapping a zipcode to a temperature and displaying
    - Got the Google API working
    - Got the Wunderground querying working
