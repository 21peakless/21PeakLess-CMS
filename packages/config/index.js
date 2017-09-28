const rc = require('rc');

exports = module.exports = rc('21peakless', {
    api: {
        ssl: false,
        version: 1,
        host: 'localhost',
        port: 9671,
    },
    database: {
        adapter: 'mongodb',
        port: 27017,
        auth: {
            enabled: false,
            user: 'admin',
            password: '',
        },
    },
    cms: {
        ssl: false,
        host: 'localhost',
        port: 9671,
    },
});