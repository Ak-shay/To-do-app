var bodyParser = require('body-parser');
var urlencoded = bodyParser.urlencoded({extended: true});

var data = [{item: 'get milk'}, {item: 'walk dog'}, {item: 'coding'}];

module.exports = function(app){

    app.get('/todo', function(req, res){
        res.render('todo', {todos: data});
    });

    app.post('/todo', urlencoded, function(req, res){
        // data comes along the req.body
        data.push(req.body);
        res.json(data); // sending json res to back to the page
    });

    app.delete('/todo/:item', function(req, res){
        data = data.filter(function(todo){
            return todo.item !== req.params.item;
        });
        res.json(data);
    });

};