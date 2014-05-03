'use strict';

var mongoose = require('mongoose'),
    Tack = mongoose.model('Tack');

/**
 * Get Feed
 */
exports.feed = function(req, res) {
  return Tack.find(function (err, tacks) {
    if (!err) {
      return res.json(tacks);
    } else {
      return res.send(err);
    }
  });
};
