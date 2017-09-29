const { throwAbstractError } = require('./utils');

class AbstractDatabase {
    init() {
        throwAbstractError('init');
    }

    connect() {
        throwAbstractError('connect');
    }

    disconnect() {
        throwAbstractError('disconnect');
    }
}

exports = module.exports = AbstractDatabase;
