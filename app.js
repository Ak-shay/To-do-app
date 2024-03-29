var express = require('express');
var todoController = require('./controllers/todo-controller');

var app = express();

// template engine
app.set('view engine', 'ejs');

// static files
app.use(express.static('./public'));

// fire controllers
todoController(app);

// listen to port
app.listen(8080);