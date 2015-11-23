'use strict';

var assert = require('chai').assert;
var parser = require('../src/parser');

describe('parser', function() {

  it('should return an array when parsing json data', function() {
    var mockData = '["cats",["cats","catskills","catskills ny","catskill chill","cats cucumbers","cats vs cucumbers","cats in the cradle","catskill mountains","cats and dogs","cats meowing"]]';
    var parsedData = parser.parse(mockData, parser.formats.json);
    assert.isArray(parsedData);
    assert.lengthOf(parsedData, 10);
  });

  it('should return valid javascript when parsing jsonp data', function() {
    var mockData = 'window.google.ac.h(["cats",[["cats",0,[131]],["catskills",0],["catskills ny",0],["cats cucumbers",0,[3]],["catskill chill",0],["cats vs cucumbers",0,[3]],["cats in the cradle",0],["cats and dogs",0],["cats for sale",0,[131]],["catskill game farm",0]],{"k":1,"q":"s-TWN4FjLJxZUrtti0cKmufYd20"}])';
    var parsedData = parser.parse(mockData, parser.formats.jsonp);
    assert.isString(parsedData);
  });

  it('should return valid xml when parsing xml data', function() {
    var mockData = '<?xml version="1.0"?><toplevel><CompleteSuggestion><suggestion data="cats"/></CompleteSuggestion><CompleteSuggestion><suggestion data="catskills"/></CompleteSuggestion><CompleteSuggestion><suggestion data="catskills ny"/></CompleteSuggestion><CompleteSuggestion><suggestion data="cats cucumbers"/></CompleteSuggestion><CompleteSuggestion><suggestion data="catskill chill"/></CompleteSuggestion><CompleteSuggestion><suggestion data="cats vs cucumbers"/></CompleteSuggestion><CompleteSuggestion><suggestion data="cats in the cradle"/></CompleteSuggestion><CompleteSuggestion><suggestion data="cats and dogs"/></CompleteSuggestion><CompleteSuggestion><suggestion data="cats for sale"/></CompleteSuggestion><CompleteSuggestion><suggestion data="catskill game farm"/></CompleteSuggestion></toplevel>';
    var parsedData = parser.parse(mockData, parser.formats.xml);
    assert.isString(parsedData);
  });

});
