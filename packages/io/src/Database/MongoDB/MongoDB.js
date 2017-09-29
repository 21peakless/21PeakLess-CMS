const mongoose = require('mongoose');
const { AbstractDatabase } = require('../../lib');

class MongoDB extends AbstractDatabase {
    init() {}

    connect(config) {
        const { host, port, auth, select } = config;
        const connectionOpts = {
            db: { native_parser: true },
            server: { reconnectTries: 30 },
        };

        if (auth.enabled) {
            connectionOpts.user = auth.user;
            connectionOpts.pass = auth.password;
        }

        mongoose.connect(`mongodb://${host}/${select}`, connectionOpts);
    }

    disconnect() {
        mongoose.connection.close();
    }
}

exports = module.exports = MongoDB;
