const { Pool } = require('pg');

const isProduction = process.NODE_ENV === "production"

let pool;

if (isProduction) {
  pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
  });
} else {
  pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'crown_87',
    password: '0000',
    port: '5432',
  });
}

//const pool = new Pool({
//    user: 'postgres',
//    host: 'localhost',
//    database: 'crown_85',
//    password: '0000',
//    port: '5432',
//    connectionString: isProduction ? process.env.DATABASE_URL : `postgresql://postgres:0000@localhost:5432/crown_85`
//});

//pool.query('SELECT * from category_85', (err, res) => {
//    console.log(JSON.stringify(res.rows))
//    pool.end()
//});

module.exports = pool;