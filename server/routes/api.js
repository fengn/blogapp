const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const article = require('../models/article');

const db = "mongodb+srv://fengnan:asd%2E1234@cluster0-pddmv.mongodb.net/test?retryWrites=true";


mongoose.Promise = global.Promise;
mongoose.connect(db, function(err){
	if(err) {
		console.log('Error connecting');
	}
});

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