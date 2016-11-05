var mongoose = require('mongoose');

var lingoSchema = mongoose.Schema({
  oword : {type: String, required : true},
  olanguage : {type: String, default : 'English'},
  tword : {type: String},
});

module.exports = mongoose.model('Lingo', lingoSchema, 'lingos');
