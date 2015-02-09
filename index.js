var express = require('express');
var path = require('path');
var app = express();

//MongoDB setup
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/whaleatorydb');

app.use(express.static(path.resolve(__dirname, '')));
//Hadle environment vars
var dotenv = require('dotenv');
dotenv.load();

var db = monk(process.env.MONGOLAB_URI);

app.set('port', (process.env.PORT || 5000))

app.get('/', function(request, response) {
 
   response.redirect('/app');
});

app.get('/userlist', function(request, response){
  request.db=db;
  var collection = db.get('usercollection');
  collection.find({},{},function(e,docs){
    response.send(docs.toString());
  });
});

app.get('/observation', function(request, response){
  request.db=db;
  var collection = db.get('observation');
//  response.send("Running in environment " + process.env.ENVIRONMENT + " - " + process.env.MONGOLAB_URI);
  collection.find({},{},function(e,docs){
    response.send(docs);
  })
})

app.get('/mock', function(request, response){
  request.db=db;
  var d1 = new Date().toJSON();
  var observations = [
  	{ 	"lat"  : "63.4394346", 
  		"lon" : "10.481066",
  		"time" : d1
  	}, 
  	{   "lat"  : "63.4384346", 
  		"lon" : "10.482066", 
  		"time" : d1
  	}];
  var collection = db.get('observation');
  var collection = collection.insert(observations);
  response.send("Added entries to the database" + observations);
})


app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})

