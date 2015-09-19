'use strict';

var trumpet = require('trumpet');
var through = require('through2');
var stream = through(write, end);
var tr = trumpet();
var loud = tr.select('.loud').createStream();
loud.pipe(stream).pipe(loud);

function write(chunk, encoding, next) {
  this.push(chunk.toString().toUpperCase());
  next();
}

function end(done) {
  done();
}

process.stdin.pipe(tr).pipe(process.stdout);
