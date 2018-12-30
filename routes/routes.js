'use strict';

module.exports = function(app) {
  var NotesController = require('../controllers/NotesController');

  app.route('/')
    .post(NotesController.readNotes);

};