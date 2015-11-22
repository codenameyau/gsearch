'use strict';

var assert = require('chai').assert;
var gsearch = require('../src/gsearch.js');

describe('gsearch', function() {

  it('should be able to change the output for API consumption', function() {
    gsearch.output('json');
    assert.strictEqual(gsearch.client, 'firefox');

    gsearch.output('xml');
    assert.strictEqual(gsearch.client, 'toolbar');

    gsearch.output('jsonp');
    assert.strictEqual(gsearch.client, 'youtube');
  });


  it('should not change the output for an invalid format', function() {
    gsearch.output('loltext');
    assert.notEqual(gsearch.format, 'loltext');
    assert.strictEqual(gsearch.client, 'firefox');
  });


  it('should be able to change the search engine', function() {
    gsearch.setEngine('youtube');
    assert.strictEqual(gsearch.engine, 'yt');

    gsearch.setEngine('google');
    assert.strictEqual(gsearch.engine, 'google search');
  });


});
