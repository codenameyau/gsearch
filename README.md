# gsearch

NPM package for Google autocomplete suggestions.

Supports the following search suggestions:

- `google`
- `youtube`

```
npm install gsearch --save
```

## Examples
More detailed examples can be found in `example/`.

```javascript
'use strict';

var gsearch = require('gsearch');
gsearch.suggest('cats', function(error, data, res) {
  console.log(data);
});
```
