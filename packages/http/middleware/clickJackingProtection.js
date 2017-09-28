const isString = val => typeof val === 'string';

/**
 * Protect the server from clickjacking attacks
 * @param {Object} options
 * @param {string} options.action       SAMEORIGIN, ALLOW_FROM, DENY
 * @param {string} options.domain       Domain of the webapp
 */
exports = module.exports = function clickJackingProtectionMiddleware(options = {}) {
    const { domain, action } = options;
    let directive;

    if (action === undefined) {
        directive = 'SAMEORIGIN';
    } else if (isString(action)) {
        directive = action.toUpperCase();
    }

    if (directive === 'ALLOWFROM') {
        directive = 'ALLOW-FROM';
    } else if (directive === 'SAME-ORIGIN') {
        directive = 'SAMEORIGIN';
    }

    if (~!['DENY', 'ALLOW-FROM', 'SAMEORIGIN'].indexOf(directive)) {
        throw new Error('Action must be undefined, "DENY", "ALLOW-FROM", or "SAMEORIGIN".');
    }

    if (directive === 'ALLOW-FROM') {
        if (!isString(domain)) {
            throw new Error('ALLOW-FROM action requires a domain parameter.');
        }

        if (!domain.length) {
            throw new Error('Domain parameter must not be empty.');
        }

        directive = `ALLOW-FROM ${domain}`;
    }

    return function clickJackingProtectionProxy(req, res, next) {
        res.setHeader('X-Frame-Options', directive);
        next();
    };
};
