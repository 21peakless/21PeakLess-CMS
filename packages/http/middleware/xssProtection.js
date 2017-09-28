// Force XSS protection mode to block
const xxsProtectionForOldIE = (req, res, next) => {
    res.setHeader('X-XSS-Protection', '1; mode=block');
    next();
};

// Dynamically detect best XSS mode (recommended)
const xxsProtectionProxy = (req, res, next) => {
    var matches = /msie\s*(\d+)/i.exec(req.headers['user-agent']);

    var value;
    if (!matches || parseFloat(matches[1]) >= 9) {
        value = '1; mode=block';
    } else {
        value = '0';
    }

    res.setHeader('X-XSS-Protection', value);
    next();
};

exports = module.exports = function xxsProtectionMidleware(options = {}) {
    if (options && !!options.setOnOldIE) {
        return xxsProtectionForOldIE;
    } else {
        return xxsProtectionProxy;
    }
};
