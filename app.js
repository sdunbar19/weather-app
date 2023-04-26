const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;

app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:false}));

app.get('/', function(req, res) {
  res.render('pages/index', {zipcode: "None"});
});

app.post('/',(req,res)=>{
  const {zipcode} = req.body
  res.render('pages/index', {zipcode: zipcode})
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})