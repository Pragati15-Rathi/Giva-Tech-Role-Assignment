const { Pool } = require('pg');

const pool = new Pool({
    user: 'db_user_name',
    host: 'localhost',
    database: 'db_name',
    password: 'db_password',
    port: 8089,
});

module.exports = pool;
