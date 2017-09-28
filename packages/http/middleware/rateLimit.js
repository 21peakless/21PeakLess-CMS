// This middleware requires a redis store
const RateLimit = require('express-rate-limit');
const Client = require('../Client');

// Default values
const DEFAULT_THROTTLE_INTERVAL = 60 * 60 * 100; // 1 hour
const DEFAULT_THROTTLE_LIMITER = 280800; // 280800 calls per hour

/**
 * Create a throttler for HTTP requests
 * @param {Object} options
 * @param {number} options.interval         Timing window in ms (1hour is default)
 * @param {number} options.limit            Request limit inbetween timing window (280'800 per hour is default => 78/second)
 */
exports = module.exports = (options = {}) => {
    const windowMs = options.interval || DEFAULT_THROTTLE_INTERVAL;
    const max = options.limit || DEFAULT_THROTTLE_LIMITER;
    const enableHeaders = typeof options.headers !== 'undefined' ? options.headers : true;

    return new RateLimit({
        max,
        windowMs,
        delayMs: 0,
        statusCode: 429,
        handler: function(req, res, next) {
            if (enableHeaders) {
                res.setHeader('X-21PeakLess-Rate-Limit-Retry-After', Math.ceil(timing / 1000));
            }

            const Connection = new Client(req, res, next);
            Connection.error(429, 'Request limit reached', {});
        },
    });
};
