const cluster = require('cluster');
const { getCPUCount, getCPUs } = require('./cpu');

exports = module.exports = mainProcessThread => {
    if (cluster.isMaster) {
        for (let i = 0; i < numCPUs; i++) {
            cluster.fork();
        }

        cluster.on('exit', (worker, code, signal) => {
            cluster.fork();
        });
    } else {
        mainProcessThread();
    }
};
