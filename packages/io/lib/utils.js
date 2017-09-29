exports.throwAbstractError = (method = '<method>') => {
    throw new Error(`abstract fn ${method} is not defined`);
};
