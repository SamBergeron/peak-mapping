'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ConfigSchema = new Schema({
  _id: String,
  name: String,
  json: String
});

module.exports = mongoose.model('Config', ConfigSchema);
