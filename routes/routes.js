'use strict';
module.exports = function(app) {
  var NoteController = require('../controllers/NoteController');

  app.route('/')
    .get(NoteController.getNotes);

};