'use strict';

var _ = require('lodash');
var Peak = require('./peak.model');

// Get list of peaks
exports.index = function(req, res) {
  Peak.find(function (err, peaks) {
    if(err) { return handleError(res, err); }
    return res.json(200, peaks);
  });
};

// Get a single peak
exports.show = function(req, res) {
  Peak.findById(req.params.id, function (err, peak) {
    if(err) { return handleError(res, err); }
    if(!peak) { return res.send(404); }
    return res.json(peak);
  });
};

// Creates a new peak in the DB.
exports.create = function(req, res) {
  Peak.create(req.body, function(err, peak) {
    if(err) { return handleError(res, err); }
    return res.json(201, peak);
  });
};

// Updates an existing peak in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Peak.findById(req.params.id, function (err, peak) {
    if (err) { return handleError(res, err); }
    if(!peak) { return res.send(404); }
    var updated = _.merge(peak, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, peak);
    });
  });
};

// Deletes a peak from the DB.
exports.destroy = function(req, res) {
  Peak.findById(req.params.id, function (err, peak) {
    if(err) { return handleError(res, err); }
    if(!peak) { return res.send(404); }
    peak.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
