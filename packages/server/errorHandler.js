const { Client } = require('@21peakless/http');

exports = module.exports = function errorHandler(err, req, res, next) {
    if (res.headersSent) {
        return next(err);
    }

    new Client(req, res, next).fail(500, 'Internal server error');
};
