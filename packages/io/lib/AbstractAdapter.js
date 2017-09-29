const AbstractDatabase = require('./AbstractDatabase');
const { throwAbstractError } = require('./utils');

class AbstractAdapter {
    constructor(database) {
        if (!(database instanceof AbstractDatabase)) {
            throw new Error(`parameter database must be an instance of AbstractDatabase and not ${typeof database}`);
        }

        this.database = database;
        // this.database.connect();
    }

    // TODO: Define abstract methods

    getToken(token = '') {
        throwAbstractError(`getToken(${token})`);
    }

    getUser(username = '') {
        throwAbstractError(`getUser(${username})`);
    }
}

exports = module.exports = AbstractAdapter;
