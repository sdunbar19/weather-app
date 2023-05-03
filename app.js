const express = require('express');
const bodyParser = require('body-parser');
const temperature = require('./server_scripts/temperature')
const path = require('path');
const app = express();
const port = 3000;

const Methods = {
	Zipcode: "zipcode",
	CityState: "citystate"
}

app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:false}));

app.locals.zipcode = "";
app.locals.city = "";
app.locals.state = "";
app.locals.method = Methods.Zipcode;

app.get('/', function(req, res) {
  console.log("LOG: GET request");
  res.render('pages/index', {output: "None"});
});

app.post('/zipcode',(req, res)=>{
  const {zipcode} = req.body;
  console.log("LOG: Received zip code through POST request: " + zipcode)
  console.log("LOG: Rendering loader page");
  app.locals.zipcode = zipcode;
  app.locals.method = Methods.Zipcode;
  res.render('pages/loader', {output: "Loading!"});
})

app.post('/citystate',(req, res)=>{
  const city = req.body.city;
  const state = req.body.state;
  console.log("LOG: Received city, state through POST request as " + city + ", " + state)
  console.log("LOG: Rendering loader page");
  app.locals.city = city;
  app.locals.state = state;
  app.locals.method = Methods.CityState;
  res.render('pages/loader', {output: "Loading!"});
})

app.post('/request',(req, res)=> {
  console.log("LOG: Making request " + app.locals.zipcode);
  if (app.locals.method == Methods.Zipcode) {
    temperature.getTemperatureFromZipcode(res, app.locals.zipcode);
  }
  else {
    temperature.getTemperatureFromCityState(res, app.locals.city, app.locals.state);
  }
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

app.use(express.static(__dirname + '/public'));