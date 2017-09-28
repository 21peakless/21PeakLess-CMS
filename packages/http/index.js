const clickJackingProtection = require('./middleware/clickJackingProtection');
const downloadPolicy = require('./middleware/downloadPolicy');
const nosniffContentType = require('./middleware/nosniffContentType');
const rateLimit = require('./middleware/rateLimit');
const strictTransportSecurity = require('./middleware/strictTransportSecurity');
const xssProtection = require('./middleware/xssProtection');
const noCache = require('./middleware/noCache');

exports.Client = require('./Client');

exports.middleware = {
    clickJackingProtection,
    downloadPolicy,
    nosniffContentType,
    rateLimit,
    strictTransportSecurity,
    xssProtection,
    noCache,
};
