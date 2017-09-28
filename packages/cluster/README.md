# @21peakless/cluster
This package handles the scalability of node.js applications (even 3rd party ones). It will analyze the CPUs of your system and create clusters for each core, except the master one which will run the main thread.

## Tutorial
```js
const createCluster = require('@21peakless/cluster');
const app = require('express')();

createCluster(() => {
    // Will create n servers which work as cluster
    // and automatically restarts if a thread dies.
    app.listen(5421);
});
```
