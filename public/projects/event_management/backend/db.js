// backend/db.js
const mysql = require('mysql2');

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: 'localhost',       // usually 'localhost'
  user: 'root',            // your MySQL username
  password: 'akshaya@02',    // your MySQL password
  database: 'event_management1', // database name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Export a promise-based pool to use async/await
module.exports = pool.promise();
