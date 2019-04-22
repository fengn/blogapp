const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
	tourBlurb: String,
	tourName: String,
	tourPackage: String,
	tourBullets: String,
	tourRegion: String,
	tourDifficulty: String,
	tourLength: Number,
	tourPrice: Number,
	tourTags: String,
	tourDescription:String
});

module.exports = mongoose.model('article', articleSchema);