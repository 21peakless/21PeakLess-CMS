const downloadPolicyIEProxy = (req, res, next) => {
    res.setHeader('X-Download-Options', 'noopen');
    next();
};

exports = module.exports = function downloadPolicyIEMiddleware() {
    return downloadPolicyIEProxy;
};
