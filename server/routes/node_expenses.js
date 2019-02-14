const express = require('express');
const router = express.Router();
const mysql = require('mysql');


var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'orel',
    password : 'blink182OB_',
    database : 'BudgeApp'
  });

connection.connect();

connection.query('SELECT name FROM categories ', function (error, results, fields) {
  if (error) throw error;
  console.log('category name: ', results[0].name);
});

connection.end();

module.exports = router;