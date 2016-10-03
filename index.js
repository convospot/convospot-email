'use strict';

var createRenderServer = require('maily');

var htmlComponents = require('./components/html/index');
var textComponents = require('./components/txt/index');

var log = function log(level, message) {
  return console.log(JSON.stringify({ level: level, message: message, datetime: new Date().toISOString() }));
};

var onReady = function onReady() {
  return log('info', 'Server is ready');
};

var instance = createRenderServer(htmlComponents, textComponents, log).listen(3000, onReady);

process.on('SIGINT', function () {
  return instance.close(function () {
    return log('info', 'Service closed');
  });
});