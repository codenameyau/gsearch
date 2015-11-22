/*!
 * gsearch
 * MIT LICENSE (c) 2015
 * https://github.com/codenameyau/gsearch
 */
'use strict';

var http = require('http');
var querystring = require('querystring');


/********************************************************************
* MODULE PROPERTIES
*********************************************************************/
var HOST_NAME = 'suggestqueries.google.com';
var SEARCH_RESOURCE = HOST_NAME + '/complete/search';

var protocols = {
  'http': 'http://',
  'https': 'https://'
};

var formats = {
  'json': 'firefox',
  'xml': 'toolbar',
  'jsonp': 'youtube'
};

var engines = {
  'google': 'google search',
  'youtube': 'yt'
};

// Private properties.
var protocol = 'http://';

// Public properties.
exports.client = formats.json;
exports.engine = engines.google;
exports.language = 'en';


/********************************************************************
* MODULE METHODS
*********************************************************************/
var formatData = function(data) {

};


exports.setProtocol = function(value) {
  protocol = protocols[value] || protocols.http;
};


exports.output = function(format) {
  exports.client = formats[format] || formats.json;
};


exports.setEngine = function(value) {
  exports.engine = engines[value] || engines.google;
};


exports.suggest = function(searchTerm, callback) {
  // Store format in variable in case it's updated asynchronously.
  var format = exports.client;

  var query = '?' + querystring.stringify({
    q: searchTerm,
    client: format,
    ds: exports.engine,
    hl: exports.language
  });

  var url = protocol + SEARCH_RESOURCE + query;
  var req = http.get(url, function(res) {
    // Send back data as whole rather than stream.
    var data = '';
    res.on('data', function(chunk) {
      data += chunk;
    });

    res.on('end', function() {
      console.log(format + ' ' + exports.client);
      return callback(null, formatData(data, format), res);
    });
  });

  req.on('error', function(error) {
    return callback(error);
  });
};
