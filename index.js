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

// TODO: Create a function to view all departments
// CRITERIA: Present a formatted table showing department names and ids
async function viewDepartments() {
  try {
    const departments = await queryAsync("SELECT * FROM department");
    console.table(departments);
    startApplication();
  } catch (err) {
    console.error("Error viewing departments:", err);
    startApplication();
  }
}

// TODO: Create a function to view all roles
// CRITERIA: List job title, role id, department, salary
async function viewRoles() {
  try {
    const roles = await queryAsync("SELECT * FROM roles");
    console.log(roles);
    startApplication();
  } catch (err) {
    console.error("Error accessing roles:", err);
    startApplication();
  }
}

// TODO: Create a function to view all employees
// CRITERIA: Present a formatted table showing employee id, first name, last name, job title, department, salary, manager
async function viewEmployees() {
  try {
    const employees = await queryAsync("SELECT * FROM employees");
    console.table(employees);
    startApplication();
  } catch (err) {
    console.error("Error veiwing employees:", err);
  }
}

// TODO: Create a function to add a department
// CRITERIA: Create a prompt to enter the name of the department and have that department added to the DB

// TODO: Create a function to add a role
// CRITERIA: Create a prompt to enter the name, salary, and department and add it to the db

// TODO: Create a function to add an employee
// CRITERIA: Create a prompt to enter the first name, last name, role, manager and add them to the db

// TODO: Create a function to update an employee role
// CRITERIA: Create a prompt to select an employee to update and then update the db

// TODO: Create a startApplication function that displays the main menu
