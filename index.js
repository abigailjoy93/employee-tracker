// establishing connection to the installed packages and the MySQL database
const mysql = require("mysql2");
const inquirer = require("inquirer");
const util = require("util");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "company_db",
});

// Promisify MySQL queries
const queryAsync = util.promisify(connection.query).bind(connection);

// Connect to the database
connection.connect((err) => {
  if (err) throw err;
  startApplication();
});
