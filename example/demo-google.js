'use strict';

var gsearch = require('../src/gsearch');

// 'google' is the default engine, so you can omit this line.
gsearch.setEngine('google');
gsearch.suggest('cats', function(error, data) {
  console.log(data);
});
