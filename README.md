# gsearch

[![NPM version](http://img.shields.io/npm/v/gsearch.svg)](https://www.npmjs.org/package/gsearch)
[![license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](https://github.com/codenameyau/gsearch/blob/master/LICENSE)

Google autocomplete suggestions. Supports google and youtube search.

**Installation**
```
npm install gsearch --save
```

## Examples
More detailed examples can be found in the [example folder](https://github.com/codenameyau/gsearch/tree/master/example).

```javascript
'use strict';

var gsearch = require('gsearch');
gsearch.suggest('cats', function(error, data, res) {
  console.log(data);
});
```
