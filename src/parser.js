/*!
 * gsearch - parser.js
 *
 * Description:
 * Formats the data returned from google's API.
 */
'use strict';

exports.formats = {
  'json': 'firefox',
  'jsonp': 'youtube',
  'xml': 'toolbar'
};

var parseJSON = function(data) {

};

var parseJSONP = function(data) {

};

var parseXML = function(data) {

};

var parsers = {
  json: parseJSON,
  jsonp: parseJSONP,
  xml: parseXML
};

exports.parse = function(data, format) {
  return parsers[format](data);
};
