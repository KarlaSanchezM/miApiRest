const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  host: 'remotemysql.com',
  user: 'mBhtdhhyQg',
  password: 'uLNg0TUvBB',
  database: 'mBhtdhhyQg',
  multipleStatements: true
});

mysqlConnection.connect(function (err) {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log('db is connected');
  }
});

module.exports = mysqlConnection;
