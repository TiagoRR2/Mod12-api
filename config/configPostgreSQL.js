const { Client } = require("pg");


const client = new Client({
  user: 'tiagor2',
  host: 'localhost',
  database: 'mod12',
  password: 'admin12345',
  port: 5432 
});

module.exports = client;