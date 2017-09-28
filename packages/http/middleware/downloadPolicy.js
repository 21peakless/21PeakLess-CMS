exports = module.exports = function downloadPolicyIEMiddleware() {
    return function downloadPolicyIEProxy(req, res, next) {
        res.setHeader('X-Download-Options', 'noopen');
        next();
    };
};
