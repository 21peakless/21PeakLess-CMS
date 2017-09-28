exports = module.exports = function nosniffContentTypeMiddleware() {
    return function nosniffContentTypeProxy(req, res, next) {
        res.setHeader('X-Content-Type-Options', 'nosniff');
        next();
    };
};
