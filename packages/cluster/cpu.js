const { cpus } = require('os');

exports.getCPUs = cpus;
exports.getCPUCount = cpus().length();
