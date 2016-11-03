var mongoose = require('mongoose');

var lingoSchema = mongoose.Schema({
  oword : {type: String, required : true},
  olanguage : {type: String, default : 'English'},
  tlanguage : {type: String, default : 'English'},
});

module.exports = mongoose.model('Lingo', lingoSchema, 'lingos');
