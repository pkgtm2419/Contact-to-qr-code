const Pool = require('pg').Pool;
const config = require('./_config.json');
const connectionOptions = { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false };

const pool = new Pool({ connectionString: process.env.DATABASE_URL || config.DATABASE_URL1, connectionOptions });

pool.on('connect', () => console.log('Connected established to database'));

module.exports = pool;