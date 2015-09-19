'use strict';
var through = require('through2');
var http = require('http');
var stream = through(write, end);

function write(chunk, encoding, next) {
  this.push(chunk.toString().toUpperCase());
  next();
}

function end(done) {
  done();
}

http.createServer(function(request, response) {
  if(request.method === 'POST')
    request.pipe(stream).pipe(response);
}).listen(process.argv[2]);
