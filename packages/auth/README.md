# @21peakless/auth
This package is dedicated to the OAuth2 authentication inside the application. It exports a middleware for express which will handle the whole token authentication in relation with the IO

## Usage

```js
const auth = require('@21peakless/auth');
const myDatabaseAdapter = require('@21peakless/io/adapter/mongo');

auth.connect(myDatabaseAdapter);

require('express')()
    .get('/', auth.middleware, (req, res, next) => {
        res.send('Authenticated!');
    });
```
