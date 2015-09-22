'use strict';

var spawn = require('child_process').spawn;
var duplexer2 = require('duplexer2');

module.exports = function(cmd, args) {
  var spawnProcess = spawn(cmd, args);
  return duplexer2(spawnProcess.stdin, spawnProcess.stdout);
};
