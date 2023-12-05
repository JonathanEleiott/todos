const { Client } = require('pg');
const connection = process.env.DATABASE_URL || 'postgres://localhost:5432/todos';
const client = new Client(connection);

module.exports = client;