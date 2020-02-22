const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  database: 'sdc',
});

client.connect();

module.exports = client;
