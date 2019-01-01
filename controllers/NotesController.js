const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Book = mongoose.model('Book');
const Chapter = mongoose.model('Chapter');
// const Note = mongoose.model('Note');
const promisify = require('es6-promisify');

exports.readNotes = async (req, res) => {
	try {
		const notesJson = req.body;
		const highlights = notesJson.highlights;
		let chapterHighlights = [];

		let newChapter;
		let bookChapters = [];

		highlights.forEach(async (highlight) => {
			if((highlight.note !== null) && (highlight.note.includes('Chapter marker') !== false)){
				chapterHighlights.push(highlight);
			}
		});

		chapterHighlights.forEach( async (chapterHighlight, chCounter) => {
			
			let chapterTitleArr = chapterHighlight.note.split("-");
			if (chapterHighlights[chCounter+1] !== null && (chapterHighlights[chCounter+1] !== undefined)){
				newChapter = new Chapter({
					title: chapterTitleArr[1],
					chapterNumber: chapterHighlight.text,
					locationBegin: chapterHighlight.location.value,
					locationEnd: chapterHighlights[chCounter+1].location.value
				});
			} else {
				newChapter = new Chapter({
					title: chapterTitleArr[1],
					chapterNumber: chapterHighlight.text,
					locationBegin: chapterHighlight.location.value,
					locationEnd: null
				});
			}
			let newCh = await newChapter.save();
			objectId = mongoose.Types.ObjectId(newCh._id);
			bookChapters.push(objectId);
		});

		const newBook = new Book({
			title: req.body.title,
			author: req.body.authors
		});
		const createdBook = await newBook.save();

		Book.update({
			_id: newBook._id
		},{
			chapters:bookChapters
		}, function(err,numAff, response){

			if(err){
        		res.status(401).json({ message: 'Error adding users to channel.' });
			}
			return res.json(createdBook);
		});

	} catch (error) {
		return res.status(400).send(error);
	}
}

