const express = require('express');
const app = express();
const port = 5000;

//data inladen
const dataFile = require('./data/museum.json');

//templating engine instellen
app.set("views", "views");
app.set("view engine", "ejs");

//publieke bestanden instellen
app.use(express.static('public'));

app.get('/', function(req, res){
  res.render('home', {
    artstuff: dataFile.art
  });
});

app.get("/detail/:id", function(req, res){
  res.render('detail', {
    artstuff: dataFile.art[req.params.id]
  });
});
app.get("/overview", function(req, res){
  res.render('overview', {
    artstuff: dataFile.art
  });
});
app.get("/contact", function(req,res){
  res.render('contact')
});

app.set('port', (process.env.PORT || 5000));
app.listen(port, function(){console.log('luister op poort: '+ port);
});
