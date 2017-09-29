const createServerInternal = require('express');
const errorHandler = require('./errorHandler');

const ensureArrayParam = val => (Array.isArray(val) ? val : []);

exports = module.exports = (options = {}) => {
    const { middlewares, statics, proxy } = options;

    middlewares = ensureArrayParam(middlewares);
    statics = ensureArrayParam(statics);

    const server = createServerInternal();

    if (proxy) {
        server.set('trust proxy', proxy);
    }

    middlewares.forEach(middleware => {
        server.use(middleware);
    });

    for (let mountPath in statics) {
        app.use(mountPath, createServerInternal.static(statics[mountPath]));
    }

    return server;
};

exports.errorHandler = errorHandler;
