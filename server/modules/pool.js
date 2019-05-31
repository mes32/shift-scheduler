const pg = require('pg');
const url = require('url');

let config = {};

if (process.env.DATABASE_URL) {
    const params = url.parse(process.env.DATABASE_URL);
    const auth = params.auth.split(':');

    config = {
        user: auth[0],
        password: auth[1],
        host: params.hostname,
        port: params.port,
        database: params.pathname.split('/')[1],
        ssl: true, // Note: heroku requires ssl to be true
        max: 10,
        idleTimeoutMillis: 30000,
    };
} else {
    config = {
        host: 'localhost',
        port: 5432,
        database: 'shift_scheduler',
        max: 10,
        idleTimeoutMillis: 30000,
    };
}

const pool = new pg.Pool(config);

// The pool with emit an error on behalf of any idle clients
// it contains if a backend error or network partition happens
pool.on('error', (err) => {
    console.log('Unexpected error on idle client', err);
    process.exit(-1);
});

module.exports = pool;