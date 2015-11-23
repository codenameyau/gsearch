'use strict';

var gsearch = require('../src/gsearch');

// Demo 'json' format, which is also the default formatting.
gsearch.output('json');
gsearch.suggest('cats', function(error, data) {
  console.log(data);
  console.log('\n');
});

// Demo 'jsonp' format. Returns raw javascript string.
gsearch.output('jsonp');
gsearch.suggest('cats', function(error, data) {
  console.log(data);
  console.log('\n');
});

// Demo 'xml' format. Returns raw xml.
gsearch.output('xml');
gsearch.suggest('cats', function(error, data) {
  console.log(data);
  console.log('\n');
});
