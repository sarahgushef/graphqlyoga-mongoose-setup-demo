const mongoose = require('mongoose');

const { MONGODB_URI } = require('./environment');

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});

const db = mongoose.connection;

module.exports = db;
