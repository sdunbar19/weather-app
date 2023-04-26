# weather-app
Challenge #1 of https://hackr.io/blog/best-computer-science-projects

# TODOS
- Get a testing framework built, CI/CD pipeline
- See TODOs in temperature, location
- IMPORTANT: Do not push your API key! Figure out how to hide this
- Handle errors
- Get EJS-Lint working

# Major Bugs
- EJS syntax issues -> be careful about closing characters, get EJS-Lint to work
- Could not parse CSS stylesheet - see source below for solution

# Key Sources
- Express HelloWorld: https://expressjs.com/en/starter/hello-world.html 
- Rendering HTML in EJS: https://codeforgeek.com/render-html-file-expressjs/
- Intro to EJS: https://www.digitalocean.com/community/tutorials/how-to-use-ejs-to-template-your-node-application
- POSTing data to EJS: https://www.codespeedy.com/post-request-in-express-js/
- Scraping the HTML of a website: https://stackoverflow.com/questions/6375461/get-html-code-using-javascript-with-a-url
- JSDOM for emulate a browser: https://github.com/jsdom/jsdom - pointed to by https://stackoverflow.com/questions/10585029/parse-an-html-string-with-js
- Parse HTML with javascript: https://stackoverflow.com/questions/11398419/trying-to-use-the-domparser-with-node-js
- Could not parse CSS stylesheet: https://stackoverflow.com/questions/48830001/jsdom-could-not-parse-css-stylesheet

# Stretch Goals
- Get the "conditions" and change the background based on the conditions
- Change the background based on time
- Automatically choose a zip code based on the user's IP address

# Project Log
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
