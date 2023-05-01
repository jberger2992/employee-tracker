const mysql = require("mysql2");
const inquirer = require("inquirer");
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'password',
      database: 'employees_db'
    },
    console.log(`Connected to the employees_db database.`)
  );

const defaultMenu = ()=>{
    inquirer.prompt([
        {
            type:"list",
            message:"What would you like to do?",
            name:"answer",
            choices:["View All Departments", "View All Roles", "View all Employees", "Add a Department", "Add a Role", "Add an Employee", "Update an Employee's Role"]
        }
    ]).then(ans=>{
        console.log(ans);
        if(ans.answer === "View All Departments"){
            db.query('SELECT name AS "Department", id FROM departments', function (err, results) {
                console.log(results);
              });
            defaultMenu();
        }
        if(ans.answer === "View All Roles"){
            db.query('SELECT roles.id, title AS "Role", departments.name AS "Department", salary AS "Salary" FROM roles JOIN departments ON department_id = departments.id', function (err, results) {
                console.log(results);
              });
            defaultMenu();
        }
        if(ans.answer === "View all Employees"){
            db.query('SELECT employees.id, first_name AS "First Name", last_name AS "Last Name", roles.title AS "Job Title", departments.name AS "Department", roles.salary AS "Salary", manager_id AS "Manager" FROM employees JOIN roles ON role_id = roles.id JOIN departments ON roles.department_id = departments.id', function (err, results) {
                console.log(results);
              });
            defaultMenu();
        }
        if(ans.answer === "Add a Department"){
            addDepartment();
        }
        if(ans.answer === "Add a Role"){
            addRole();
        }
        if(ans.answer === "Add an Employee"){
            addEmployee();
        }
        if(ans.answer === "Update an Employee's Role"){
            updateEmployee();
        }
    })
}

const addDepartment = ()=>{
    inquirer.prompt([
        {
            type:"input",
            message:"What is the name of the department you would like to add?",
            name:"name"
        }
    ]).then(ans=>{
        db.query(`INSERT INTO departments (name) VALUES ("${ans.name}")`, function (err, results) {
            console.log(results);
          });
        defaultMenu()
    })
}

const addRole = ()=>{
    inquirer.prompt([
        {
            type:"input",
            message:"What is the title of the role you would like to add?",
            name:"title"
        },
        {
            type:"input",
            message:"What is this role's salary?",
            name:"salary"
        },
        {
            type:"input",
            message:"What is the department ID this role belongs to?",
            name:"department",
        }
        // {
        //     type:"list",
        //     message:"What is the department this role belongs to?",
        //     name:"department",
        //     choices:[]
        // }
    ]).then(ans=>{
        db.query(`INSERT INTO roles (title, salary, department_id) VALUES ("${ans.title}", ${ans.salary}, ${ans.department})`, function (err, results) {
            console.log(results);
          });
        defaultMenu()
    })
}

const addEmployee = ()=>{
    inquirer.prompt([
        {
            type:"input",
            message:"What is the first name of this employee?",
            name:"fName"
        },
        {
            type:"input",
            message:"What is the last name of this employee?",
            name:"lName"
        },
        {
            type:"input",
            message:"What is this employee's role ID?",
            name:"role",
        },
        // {
        //     type:"list",
        //     message:"What is this employee's role?",
        //     name:"role",
        //     choices:[]
        // },
        {
            type:"input",
            message:"What is this employee's manager's ID?",
            name:"manager",
        }
        // {
        //     type:"list",
        //     message:"Who is this employee's manager?",
        //     name:"manager",
        //     choices:["None"]
        // }
    ]).then(ans=>{
        db.query(`INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ("${ans.fName}", "${ans.lName}", ${ans.role}, ${ans.manager})`, function (err, results) {
            console.log(results);
          });
        defaultMenu()
    })
}

const updateEmployee = ()=>{
    inquirer.prompt([
        {
            type:"list",
            message:"What role would like to asign to this employee?",
            name:"role",
            choices:[]
        }
    ]).then(ans=>{
    
        defaultMenu()
    })
}

app.listen(PORT, () =>
    console.log(`App listening on http://localhost:${PORT}`)
);

defaultMenu();