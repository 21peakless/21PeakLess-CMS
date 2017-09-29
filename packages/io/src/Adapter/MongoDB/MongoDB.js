const mongoose = require('mongoose');
const { AbstractAdapter } = require('../../lib');

class MongoDBAdapter extends AbstractAdapter {}

exports = module.exports = MongoDBAdapter;
