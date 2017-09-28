const DEFAULT_MAX_AGE = 180 * 24 * 60 * 60;

/**
 * Setting strict transport security HTTP header
 * @param {Object} options
 * @param {Object} options.maxAge               Expiration age
 * @param {boolean} options.includeSubDomains   Whether to include subdomains or not
 * @param {boolean} options.preload             Setting preload option in header
 * @param {Function} options.setIf              Callback to execute
 */
exports = module.exports = function hsts(options) {
    options = options || {};

    const maxAge = options.maxAge != null ? options.maxAge : DEFAULT_MAX_AGE;
    const includeSubDomains = options.includeSubDomains !== false && options.includeSubdomains !== false;
    const setIf = options.hasOwnProperty('setIf') ? options.setIf : () => true;

    if (options.hasOwnProperty('maxage')) {
        throw new Error('maxage is not a supported property. Did you mean to pass "maxAge" instead of "maxage"?');
    }

    if (arguments.length > 1) {
        throw new Error('HSTS passed the wrong number of arguments.');
    }

    if (typeof maxAge !== 'number') {
        throw new TypeError('HSTS must be passed a numeric maxAge parameter.');
    }

    if (maxAge < 0) {
        throw new RangeError('HSTS maxAge must be nonnegative.');
    }

    if (typeof setIf !== 'function') {
        throw new TypeError('setIf must be a function.');
    }

    if (options.hasOwnProperty('includeSubDomains') && options.hasOwnProperty('includeSubdomains')) {
        throw new Error('includeSubDomains and includeSubdomains cannot both be specified.');
    }

    let header = `max-age=${Math.round(maxAge)}`;

    if (includeSubDomains) {
        header = `${header}; includeSubDomains`;
    }

    if (options.preload) {
        header = `${header}; preload`;
    }

    return function hsts(req, res, next) {
        if (setIf(req, res)) {
            res.setHeader('Strict-Transport-Security', header);
        }

        next();
    };
};
