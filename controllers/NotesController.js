const mongoose = require('mongoose');
// const Note = mongoose.model('Note');
const promisify = require('es6-promisify');

exports.readNotes = async (req, res) => {
	try {
		console.log(req.body);
		return res.json('testing 123')

	} catch (error) {
		return res.status(400).send(error);
	}
}

