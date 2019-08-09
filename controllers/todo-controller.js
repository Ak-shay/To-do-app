var bodyParser = require('body-parser');
var urlencoded = bodyParser.urlencoded({extended: true});

var mongoose = require('mongoose');

// connect to db
mongoose.connect('<YOUR MLAB DATABASE LINK>', {useNewUrlParser: true});

// create a schema
var todoSchema = new mongoose.Schema({
    item: String
});

var Todo = mongoose.model('Todo', todoSchema);

module.exports = function(app){

    app.get('/todo', function(req, res){
        // get data from mongo db and pass it to view
        Todo.find({}, function(err, data){
            if (err) throw err;
            res.render('todo', {todos: data});
        }); // empty for all
        
    });

    app.post('/todo', urlencoded, function(req, res){
        // data comes along the req.body
        // get data from view and save to mongo
        var newtodo = new Todo(req.body).save(function(err, data){
            if (err) throw err;
            res.json(data);
        });
    });

    app.delete('/todo/:item', function(req, res){
        // delete the requested item from mongo db
        Todo.find({item: req.params.item}).remove(function(err, data){
            if (err) throw err;
            res.json(data);
        });
    });
};