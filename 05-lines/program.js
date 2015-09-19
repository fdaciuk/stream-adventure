'use strict';
var through = require('through2');
var split = require('split');
var stream = through(write);
var isOddLine = true;

function write(line, _, next) {
  var str = line.toString();
  var result = isOddLine ? str.toLowerCase() : str.toUpperCase();
  this.push(result + '\n');
  isOddLine = !isOddLine;
  next();
}

process.stdin.pipe(split()).pipe(stream).pipe(process.stdout);
