const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const article = require('../models/article');

//const db = "mongodb+srv://fengnan:asd%2E1234@cluster0-pddmv.mongodb.net/test?retryWrites=true";
// mongoose.connect('mongodb+srv://fengnan:asd%2E1234@cluster0-pddmv.mongodb.net/test?retryWrites=true', {useNewUrlParser: true});
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   // we're connected!
//   console.log('Success connecting!');
// });
var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/learning_mongo";

// MongoClient.connect(url, function(err, db) {
// 	console.log("Connected successfully to server");

// 	db.close();
// })
// var findDocuments = function(db, callback) {
// 	var collection = db.collection('tours');

// 	collection.find().toArray(function(err, docs) {
// 		console.log(docs);
// 		callback;
// 	})
// }

const client = new MongoClient(url, { useNewUrlParser: true });


client.connect(err => {
  const collection = client.db("learning_mongo").collection("tours");
  // perform actions on the collection object
  collection.find({"tourPrice" : 1100}).toArray(function(err, docs) {
		console.log(docs);
		//callback;
	})
  console.log("Connected successfully to server");

	//db.close();
	client.close();
});

// mongoose.Promise = global.Promise;
// mongoose.connect(db, function(err){
// 	if(err) {
// 		console.log('Error connecting1');
// 	}
// });

router.get('/all', function(req, res) {

	article.find({}).exec(function(err, articles) {
		if (err) {
			console.log('Error getting the articles');
		} else {
			console.log(articles);
			res.json(articles);
		}
	});
});

module.exports = router;