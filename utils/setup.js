/**
 * Created by bbecker on 1/7/17.
 */
const   user = "matcha",
        pwd = "matcha",
        dbName = "matcha",
        port = "27017";

let MongoClient = require('mongodb').MongoClient;

// Connect to the db

console.log("mongodb://" + user +":"+ pwd +"@localhost:"+ port +"/matcha");

MongoClient.connect("mongodb://" + user +":"+ pwd +"@localhost:"+ port +"/matcha", function(err, db) {
    if(err) { return console.dir(err); }
    db.collection('user', function(err, collection) {});

    db.collection('test', {w:1}, function(err, collection) {});

    db.createCollection('test', function(err, collection) {});

    db.createCollection('test', {w:1}, function(err, collection) {});
});