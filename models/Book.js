const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
const validator = require('validator');

const bookSchema = new Schema({
	title:{
		type: String,
		trim:true,
		required: 'Please supply the title'
	},
	author:{
		type: String,
		trim:true,
		required: 'Please supply the author'
	},
	chapters:[
		{
			type:mongoose.Schema.ObjectId,
			ref:'Chapter'
		}
	],
	notes:[
		{
			type:mongoose.Schema.ObjectId,
			ref:'Note'
		}
	],
	created: {
		type:Date,
		default:Date.now
	},
});

function autopopulate(next){
	this.populate('chapters');
	this.populate('notes');
	next();
}
module.exports = mongoose.model('Book', bookSchema);