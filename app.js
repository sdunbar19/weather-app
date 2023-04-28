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
  res.render('pages/index', {output: "None"});
});

app.post('/',(req, res)=>{
  const {zipcode} = req.body;
  temperature.getTemperature(res, zipcode);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})