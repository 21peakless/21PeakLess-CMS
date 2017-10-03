const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const createServerInternal = require('express');
const errorHandler = require('./errorHandler');

const ensureArrayParam = val => (Array.isArray(val) ? val : []);

exports = module.exports = (options = {}) => {
    const { middlewares, statics, proxy } = options;

    middlewares = ensureArrayParam(middlewares);
    statics = ensureArrayParam(statics);

    const server = createServerInternal();

    if (proxy) {
        // support proxy env
        server.set('trust proxy', proxy);
    }

    // basic middleware needed in each case
    server.use(bodyParser.urlencoded());
    server.use(bodyParser.json());
    server.use(cookieParser());

    // attach custom middlewares
    middlewares.forEach(middleware => {
        server.use(middleware);
    });

    // attach static mount paths
    for (let mountPath in statics) {
        app.use(mountPath, createServerInternal.static(statics[mountPath]));
    }

    return server;
};

exports.utils = createServerInternal;

exports.errorHandler = errorHandler;
