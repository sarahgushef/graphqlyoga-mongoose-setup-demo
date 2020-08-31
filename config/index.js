const db = require('./database');
const { PORT, MONGODB_URI } = require('./environment');

module.exports = {
    db,
    PORT,
    MONGODB_URI,
};
