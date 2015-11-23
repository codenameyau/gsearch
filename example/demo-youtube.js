'use strict';

var gsearch = require('../src/gsearch');

// Simple example to search for 'cats' on youtube's suggestion engine.
gsearch.setEngine('youtube');
gsearch.suggest('cats', function(error, data) {
  console.log(data);
});
