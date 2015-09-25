'use strict';
var duplexer2 = require('duplexer2');
var through = require('through2');

module.exports = function(counter) {
  var stream = through({ objectMode: true }, write, end);
  var counts = {};

  function write(chunk, encoding, next) {
    counts[chunk.country] = (counts[chunk.country] || 0) + 1;
    next();
  }

  function end(done) {
    counter.setCounts(counts);
    done();
  }
  return duplexer2(stream, counter);
};
