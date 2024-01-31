import { Pool } from 'pg';

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'pandemonium',
    port: 5432,
});

module.exports = pool;