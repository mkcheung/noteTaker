const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
const validator = require('validator');

const chapterSchema = new Schema({
	title:{
		type: String,
		trim:true,
		required: 'Please supply the title'
	},
	chapterNumber:{
		type: String,
		required: 'Please supply the number'
	},
	locationBegin:{
		type: Number, 
		required: 'Please supply the beginning location of the chapter'
	},
	locationEnd:{
		type: Number
	},
	created: {
		type:Date,
		default:Date.now
	},
});

module.exports = mongoose.model('Chapter', chapterSchema);