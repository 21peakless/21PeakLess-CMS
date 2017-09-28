const nosniffContentTypeProxy = (req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    next();
};

exports = module.exports = function nosniffContentTypeMiddleware() {
    return nosniffContentTypeProxy;
};
