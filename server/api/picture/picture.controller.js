'use strict';

var _ = require('lodash');
var Picture = require('./picture.model');

// Get list of pictures
exports.index = function(req, res) {
  Picture.find(function (err, pictures) {
    if(err) { return handleError(res, err); }
    return res.json(200, pictures);
  });
};

// Get a single picture
exports.show = function(req, res) {
  Picture.findById(req.params.id, function (err, picture) {
    if(err) { return handleError(res, err); }
    if(!picture) { return res.send(404); }
    return res.json(picture);
  });
};

// Get list of pictures from gallery
exports.showGallery = function(req, res) {
  Picture.find({ peak: req.params.id }, function (err, pictures){
    if(err) { return handleError(res, err); }
    if(!pictures) { return res.send(404); }
    return res.json(pictures);
  });
};

// Creates a new picture in the DB.
exports.create = function(req, res) {
  Picture.create(req.body, function(err, picture) {
    if(err) { return handleError(res, err); }
    return res.json(201, picture);
  });
};

// Updates an existing picture in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Picture.findById(req.params.id, function (err, picture) {
    if (err) { return handleError(res, err); }
    if(!picture) { return res.send(404); }
    var updated = _.merge(picture, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, picture);
    });
  });
};

// Deletes a picture from the DB.
exports.destroy = function(req, res) {
  Picture.findById(req.params.id, function (err, picture) {
    if(err) { return handleError(res, err); }
    if(!picture) { return res.send(404); }
    picture.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
