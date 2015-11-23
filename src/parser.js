/*!
 * gsearch - parser.js
 *
 * Description:
 * Formats the data returned from Google's API.
 */
'use strict';

exports.formats = {
  'json': 'firefox',
  'jsonp': 'youtube',
  'xml': 'toolbar'
};

var parseJSON = function(data) {
  return JSON.parse(data)[1];
};

var parseJSONP = function(data) {
  return data;
};

var parseXML = function(data) {
  return data;
};

// This is Google's data formats.
var parsers = {
  firefox: parseJSON,
  youtube: parseJSONP,
  toolbar: parseXML
};

exports.parse = function(data, format) {
  return parsers[format](data);
};
