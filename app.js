var express = require('express');
var budgetController = require('./controllers/budgetController');

var app = express();

//set up template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));

//Fire the controllers
budgetController(app);

app.listen(8080);
console.log("Server has started on port 8080. Keep Hacking :) ")
