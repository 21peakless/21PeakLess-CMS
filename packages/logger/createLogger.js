const { join } = require('path');
const winston = require('winston');
require('winston-daily-rotate-file');

// Enable winston to emit errors to the console
winston.emitErrs = true;

const DEFAULT_LOGFILE = '21peakless-general.log';

exports = module.exports = (options = {}) => {
    const logfile = options.logfile || join(__dirname, `logs/${DEFAULT_LOGFILE}`);

    return new winston.Logger({
        transports: [
            new winston.transports.DailyRotateFile({
                level: process.env.ENV === 'development' ? 'debug' : 'info',
                prepend: true,
                datePattern: 'yyyy-MM-dd.',
                filename: logfile,
                handleExceptions: true,
                json: true,
                maxsize: 5242880, // 5MB
                maxFiles: 5,
                colorize: false,
            }),
            new winston.transports.Console({
                level: process.env.ENV === 'development' ? 'debug' : 'error',
                handleExceptions: true,
                json: false,
                colorize: true,
            }),
        ],
        exitOnError: false,
    });
};
