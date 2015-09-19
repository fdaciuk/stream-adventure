'use strict';

var through = require('through2');
var stream = through(toUpperCase);

function toUpperCase(buffer, encoding, next) {
  var str = buffer.toString();
  this.push(str.toUpperCase());
  next();
}

process.stdin.pipe(stream).pipe(process.stdout);
