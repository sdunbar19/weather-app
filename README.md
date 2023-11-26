# weather-app
Challenge #1 of https://hackr.io/blog/best-computer-science-projects

Edit 5/2/23:
Am taking a break from this to work on some project work for a course. 
Will return when I can!

## ABOUT
This is a simple weather app that takes in either the city/state or the 
zipcode of any American location, and tells you the weather at that 
location.

## USAGE
**IMPORTANT**: For this project to function, you must add a separate "keys.txt" file to the
upper level directory containing a Google Geocoding API key. 
For obvious reasons, I'm not publishing mine. See 
https://developers.google.com/maps/documentation/geocoding/overview

To run this app, run `node app.js`, and go to `localhost:3000`

## Bugs Encountered in Development (All Resolved)
- EJS syntax issues -> be careful about closing characters, get EJS-Lint to work
- Could not parse CSS stylesheet from API call - see source below for solution
- Various problems with Google API
- Loading multiple things in a row without user input - see my stackoverflow post for my problem, and my fix (https://stackoverflow.com/questions/76144206/making-a-server-side-post-request-with-node-js-express-jquery?noredirect=1#comment134283562_76144206). Can also 
be applied to chain calls to and from the server (would just add another similar ajax call in the success method of the first)
- Applying CSS to the website - have to link the path to the folder, not include the folder in the name

## Key Resources
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
- Adding CSS, javascript to EJS - https://dev.to/yogesnsamy/how-to-add-custom-css-javascript-files-to-an-expressjs-app-48cp
- express-static why - https://masteringjs.io/tutorials/express/app-use-static#:~:text=In%20Express%2C%20app.-,use(express.,files%20to%20your%20Express%20app.&text=You%20can%20use%20the%20express,from%20this%20folder%20via%20HTTP.
- Server side programming - https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Introduction
- Amending commits - https://stackoverflow.com/questions/63882369/can-i-amend-a-commit-made-with-vscode-to-github-repo
- Zipcode database (USA) - https://data.opendatasoft.com/explore/dataset/georef-united-states-of-america-zc-point%40public/

## Followups
- Could expand this to be worldwide (will currently only work for USA)