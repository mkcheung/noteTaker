const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
const validator = require('validator');

const noteSchema = new Schema({
	chapter:{
		type: String,
		trim:true,
		required: 'Please supply the chapter'
	},
	note:{
		type: String,
		trim:true,
		required: 'Please supply the note'
	},
	location:{
		type: Number, 
		required: 'Please supply the location'
	},
	created: {
		type:Date,
		default:Date.now
	},
});

module.exports = mongoose.model('Note', noteSchema);