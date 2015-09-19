'use strict';
var request = require('request');
var postRequest = request.post('http://localhost:8099');
process.stdin.pipe(postRequest).pipe(process.stdout);
