# weather-app
Challenge #1 of https://hackr.io/blog/best-computer-science-projects

## USAGE
**IMPORTANT**: For this project to function, you must add a separate "keys.txt" file to the
upper level directory containing a Google Geocoding API key. 
For obvious reasons, I'm not publishing mine. See 
https://developers.google.com/maps/documentation/geocoding/overview

## TODOS
- Get CSS stylings working
- Multiple nested AJAX calls (try)
- Deal with unknown wunderground URL
- Get more info + pretty backgrounds :3
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
- Could not parse CSS stylesheet from API call - see source below for solution
- Various problems with Google API
- Loading multiple things in a row without user input - see my stackoverflow post for my problem, and my fix (https://stackoverflow.com/questions/76144206/making-a-server-side-post-request-with-node-js-express-jquery?noredirect=1#comment134283562_76144206). Can hopefully be applied to multiple chaining AJAX calls (will attempt)
- Applying CSS to the website (not fixed)

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
- Making POST requests from javascript p3 (unsuccessful): https://stackoverflow.com/questions/45121440/redirect-to-new-page-after-ajax-post-request-using-express
- Craigslist Node.js Express AJAX tutorial: https://mherman.org/blog/handling-ajax-calls-with-node-dot-js-and-express-scraping-craigslist/
- JQuery for Node.js: https://www.npmjs.com/package/jquery
- An example AJAX call: https://gist.github.com/diorahman/1520485
- AJAX from the front-end: https://www.geeksforgeeks.org/how-to-send-data-from-client-side-to-node-js-server-using-ajax-without-page-reloading/
- Show a loading page with Node.js https://stackoverflow.com/questions/24241140/what-is-the-correct-way-in-node-js-express-to-show-a-spinner-while-performing-a
- Express to modify HTML pages (HELPFUL, SUCCESSFUL): https://stackoverflow.com/questions/34643522/how-to-change-front-end-html-using-node-js
- app.locals documentation: https://expressjs.com/en/api.html#app.locals
- My stackoverflow Q&A about express, ajax, etc: https://stackoverflow.com/questions/76144206/making-a-server-side-post-request-with-node-js-express-jquery?noredirect=1#comment134283562_76144206
- Adding CSS to EJS - https://stackoverflow.com/questions/18629327/adding-css-file-to-ejs

## Stretch Goals
- Autocomplete
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

### 4/28/23
5:30 - 6:30pm
- Tried to get a loading page working unsuccessfully
- Going to look into AJAX next time I work on this

### 4/30/23
2:30 - 6:00pm
- Looked into AJAX, JQuery, etc for trying to serve multiple pages
- Made a stack overflow post with my current approach

### 5/1/23
8:00 - 10:00pm
- Got the AJAX call working! A loading screen is now displayed
- Got searching working for city/state, in addition to zipcode
- Ran into an issue when trying to apply css
