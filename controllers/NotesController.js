const mongoose = require('mongoose');
const Note = mongoose.model('Note');
const bcrypt = require('bcrypt');  
const promisify = require('es6-promisify');
const jwt = require("jsonwebtoken");

exports.getNotes = async (req, res) => {

	try {

		const notes = await Note.find({});
		if(!notes){
			res.status(401).json({ message: 'No notes.' });
		} else {
			return res.json(notes);
		}
	} catch (error) {
		return res.status(400).send(error);
	}
}
