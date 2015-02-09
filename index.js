var express = require('express');
var app = express();

//MongoDB setup
var mongo = require('mongodb');
var monk = require('monk');
//var db = monk('localhost:27017/whaleatorydb');
var db = monk(process.env.MONGOLAB_URI);

app.set('port', (process.env.PORT || 5000))

app.get('/', function(request, response) {
   response.send("Whaleatory" );
});

app.get('/userlist', function(request, response){

  //response.send("Userlistpage");
  ///*
  request.db=db;
  var collection = db.get('usercollection');
  collection.find({},{},function(e,docs){
    response.send(docs.toString());
  });
  //*/
});

app.get('/observation', function(request, response){
  request.db=db;
  var collection = db.get('observation');
  collection.find({},{},function(e,docs){
    response.send(docs);
  })
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})

