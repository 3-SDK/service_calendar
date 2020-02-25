const { Client, Pool } = require('pg');

// const client = new Client({
//   user: 'postgres',
//   host: 'ec2-54-193-50-164.us-west-1.compute.amazonaws.com',
//   database: 'sdc',
//   port: 5432,
// });

// client.connect();

// module.exports = client;

const pool = new Pool({
  user: 'postgres',
  host: 'ec2-54-193-50-164.us-west-1.compute.amazonaws.com',
  database: 'sdc',
  port: 5432,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

module.exports = pool;
