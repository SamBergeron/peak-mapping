'use strict';

var _ = require('lodash');
var Config = require('./config.model');

// Get list of configs
exports.index = function(req, res) {
  Config.find(function (err, configs) {
    if(err) { return handleError(res, err); }
    return res.json(200, configs);
  });
};

// Get a single config
exports.show = function(req, res) {
  Config.findById(req.params.id, function (err, config) {
    if(err) { return handleError(res, err); }
    if(!config) { return res.send(404); }
    return res.json(config);
  });
};

// Creates a new config in the DB.
exports.create = function(req, res) {
  Config.create(req.body, function(err, config) {
    if(err) { return handleError(res, err); }
    return res.json(201, config);
  });
};

// Updates an existing config in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Config.findById(req.params.id, function (err, config) {
    if (err) { return handleError(res, err); }
    if(!config) { return res.send(404); }
    var updated = _.merge(config, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, config);
    });
  });
};

// Deletes a config from the DB.
exports.destroy = function(req, res) {
  Config.findById(req.params.id, function (err, config) {
    if(err) { return handleError(res, err); }
    if(!config) { return res.send(404); }
    config.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}