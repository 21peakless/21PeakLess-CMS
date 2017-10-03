const { join } = require('path');
const config = require('@21peakless/config');
const server = require('@21peakless/server');
const http = require('@21peakless/http');

console.log(config, server, http);

const app = server({
    middlewares: [],
    statics: {
        '/admin': join(__dirname, '..', 'client/public'),
    },
});

const cdn = server({
    middlewares: [],
    statics: {},
});

app.use('/api/v1/', cdn);
