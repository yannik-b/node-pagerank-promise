pagerank-promise
================

usage
-----

```javascript
const pagerank = require('pagerank-promise');

go();
async function go() {
  let alexa = await pagerank.alexa('http://example.com/');
  console.dir(alexa);

  let google = await pagerank.google('http://example.com/');
  console.dir(google);
}
```
