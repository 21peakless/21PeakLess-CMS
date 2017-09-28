const morgan = require('morgan');
const createLogger = require('./createLogger');

const createLoggerStream = logger => ({
    write: (message, encoding) => {
        logger.info(message);
    },
});

exports = module.exports = logger => {
    return morgan({
        stream: createLoggerStream(logger),
    });
};
