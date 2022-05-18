const pg = require ('pg');
const pool = new pg.Pool({
    database: 'koala_inventory',
    host: 'localhost',
    port: 5432,
    max: 12,
    idleTimeoutMillis: 30000
});

module.exports = pool;

