/*!
 * gsearch
 * MIT LICENSE (c) 2015
 * https://github.com/codenameyau/gsearch
 */
'use strict';

var http = require('http');
var querystring = require('querystring');
var parser = require('./parser');


/********************************************************************
* MODULE PROPERTIES
*********************************************************************/
var HOST_NAME = 'suggestqueries.google.com';
var SEARCH_RESOURCE = HOST_NAME + '/complete/search';

var engines = {
  'google': 'google search',
  'youtube': 'yt'
};

var protocols = {
  'http': 'http://',
  'https': 'https://'
};

// Private properties.
var protocol = 'http://';

// Public properties.
exports.client = parser.formats.json;
exports.engine = engines.google;
exports.language = 'en';


/********************************************************************
* MODULE METHODS
*********************************************************************/
exports.setProtocol = function(value) {
  protocol = protocols[value] || protocols.http;
};


exports.output = function(format) {
  exports.client = parser.formats[format] || parser.formats.json;
};


exports.setEngine = function(value) {
  exports.engine = engines[value] || engines.google;
};


exports.suggest = function(searchTerm, callback) {
  // Store format locally in case it's updated asynchronously.
  var format = exports.client;

  var query = '?' + querystring.stringify({
    q: searchTerm,
    client: format,
    ds: exports.engine,
    hl: exports.language
  });

  var url = protocol + SEARCH_RESOURCE + query;
  var req = http.get(url, function(res) {

    // Send back data as whole rather than stream chunks.
    var data = '';
    res.on('data', function(chunk) {
      data += chunk;
    });

    res.on('end', function() {
      return callback(null, parser.parse(data, format), res);
    });
  });

  req.on('error', function(error) {
    return callback(error);
  });
};
