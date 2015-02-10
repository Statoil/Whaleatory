var express = require('express');
var path = require('path');
var app = express();

//MongoDB setup
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/whaleatorydb');
var bodyParser = require('body-parser');
app.use( bodyParser.json() );       				// to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // to support URL-encoded bodies

app.use(express.static(path.resolve(__dirname, '')));
//Hadle environment vars
var dotenv = require('dotenv');
dotenv.load();

var db = monk(process.env.MONGOLAB_URI);

app.set('port', (process.env.PORT || 5000))

app.get('/', function(request, response) {
   response.redirect('/app');
});

app.get('/observation', function(request, response){
  request.db=db;
  var collection = db.get('observation');
  collection.find({},{},function(e,docs){
  	var result = [];
    response.send(docs);
  })
})

app.post('/observation', function(request, response) {
    // Set our internal DB variable
    var observations = request.body.observations;

    var collection = db.get('observation');
    //TODO validate input
    collection.insert(observations, function (err, doc) {
        if (err) {
            response.send("There was a problem adding the observations to the database.");
        } else {
            response.send("Successfully added " + observations.length + " observation(s) to the database");
        }
    });
});

app.get('/mock', function(request, response){
  request.db=db;
  var d1 = new Date().toJSON();
  var observations = [
	  	{pos: {latitude: 63.4494346, longitude: 10.481066 }, "species" : {"id" : 2, type : "Whale", name : "Fin Whale", icon : "img/icon/whale_trans_small.png", image:"img/images/FinWhale.jpg"}, comment: 'Johnny Longtail 1969'},
	    {pos: {latitude: 63.4474346, longitude: 10.483066 }, "species" : {"id" : 5, type: "Whale", name: "Pygmy Sperm Whale", icon:"img/icon/whale_trans_small.png", image:"img/images/SpermWhale.jpg"}, comment: 'Peter Shorttail 1974'},
	    {pos: {latitude: 63.4394346, longitude: 10.481466 }, "species" : {"id" : 8, type: "Seal", name: "Northern Elephant Seal", icon:"img/icon/seal_trans_small.png", image:"img/images/NorthernElephantSeal.jpg"}, comment: 'Lenny WideTail 1989'}
    ];
  
  var collection = db.get('observation');
  collection.insert(observations);
  response.send("Added entries to the database" + observations);
})


app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})

