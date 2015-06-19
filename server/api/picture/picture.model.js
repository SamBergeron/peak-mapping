'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PictureSchema = new Schema({
  url: String,
  efix: String,
  peak: { type: String, ref: 'Peak'}
});

module.exports = mongoose.model('Picture', PictureSchema);
