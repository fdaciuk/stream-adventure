'use strict';

var split = require('split');
var through2 = require('through2');
var stream = through2(write, end);
var counter = 0;
function write(line, encoding, next) {
  var actualLine = line.toString();
  var transform = counter++ % 2 === 0 ? actualLine.toLowerCase() : actualLine.toUpperCase();
  this.push( transform + '\n' );
  next();
}

function end(done) {
  done();
}
process.stdin.pipe(split()).pipe(stream).pipe(process.stdout);
