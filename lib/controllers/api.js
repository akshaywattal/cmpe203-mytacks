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
console.log(req);
return Tack.update({link : req.body.tack.link},
		   			{$pull : {'boards' : req.body.board}}, function(err, success){

		   				if(!err){
		   					return res.json('Deleted');
		   				}
		   				else return 'error';
		   			});
// return Tack.remove(function (err, tacks) {
//     if (!err) {
//       return res.json(tacks);
//     } else {
//       return res.send(err);
//     }
//   });
};

