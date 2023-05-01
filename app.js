const express = require('express');
const bodyParser = require('body-parser');
const temperature = require('./temperature')
const path = require('path');
const app = express();
const port = 3000;
const jsdom = require('jsdom');
const dom = new jsdom.JSDOM("");
const jQuery = require('jquery')(dom.window);

app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:false}));

app.get('/', function(req, res) {
  console.log("LOG: GET request");
  res.render('pages/index', {output: "None"});
});

app.post('/',(req, res)=>{
  const {zipcode} = req.body;
  console.log("LOG: Sending POST request with zip code " + zipcode);
  res.render('pages/index', {output: "Loading"});
  jQuery.ajax({
    url: '/request',
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({"zipcode": zipcode }),
    success: function(response){ console.log( response ); }
  });
})

app.post('/request',(req, res)=> {
  console.log("LOG: Received POST request");
  const {zipcode} = req.body.zipcode;
  temperature.getTemperature(res, zipcode);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})