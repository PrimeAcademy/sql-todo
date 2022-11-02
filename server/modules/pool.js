const pg = require('pg');

/*
Databse URL
postgresql://username:password@database_url/database_name
*/

let pool;
if (process.env.DATABASE_URL) {
  pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL
  })
}
else {
  pool = new pg.Pool({
    database: "cloud-todo",      // localhost
  });
}

module.exports = pool;