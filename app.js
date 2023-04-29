const express = require('express');
const bodyParser = require('body-parser');
const temperature = require('./temperature')
const path = require('path');
const app = express();
const port = 3000;

app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:false}));

app.get('/', function(req, res) {
  console.log("LOG: GET request");
  res.render('pages/index', {output: "None"});
});

app.get('/weather', function(req, res) {
  temperature.getTemperature(res, '03755');
})

app.post('/',(req, res)=>{
  const {zipcode} = req.body;
  console.log("LOG: POST request with zip code " + zipcode);
  res.render('pages/index', {output: "Loading"});
  res.redirect('/weather');
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})