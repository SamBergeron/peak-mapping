  'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PeakSchema = new Schema({
  _id: String,
  animation: String,
  latitude: String,
  longitude: String,
  title: String,
  zone: String,
  mainImgUrl: String,
});

function slugify(text) {
    return text.toString().toLowerCase()
      .replace(/\s+/g, '-')        // Replace spaces with -
      .replace(/[^\w\-]+/g, '')    // Remove all non-word chars
      .replace(/\-\-+/g, '-')      // Replace multiple - with single -
      .replace(/^-+/, '')          // Trim - from start of text
      .replace(/-+$/, '');         // Trim - from end of text
  }

PeakSchema.pre('save', function (next) {
  this._id = slugify(this.title);
  next();
});

module.exports = mongoose.model('Peak', PeakSchema);
