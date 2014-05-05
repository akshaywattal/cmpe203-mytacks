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

// Delete Tack

exports.deleteTack = function(req, res){
console.log(req.params.link);
// return Tack.remove(function (err, tacks) {
//     if (!err) {
//       return res.json(tacks);
//     } else {
//       return res.send(err);
//     }
//   });
};

