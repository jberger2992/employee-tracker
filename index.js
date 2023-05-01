const mysql2 = require("mysql2");
const inquirer = require ("inquirer");
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
    inqurior.prompt([
        {
            type:"list",
            message:"What would you like to do?",
            name:"answer",
            choices:["View All Departments", "View All Roles", "View all Employees", "Add a Department", "Add a Role", "Add an Employee", "Update an Employee's Role"]
        }
    ]).then(ans=>{
        console.log(ans);
        if(ans.answer === "View All Departments"){
            
            defaultMenu()
        }
        if(ans.answer === "View All Roles"){
            
            defaultMenu()
        }
        if(ans.answer === "View all Employees"){
            
            defaultMenu()
        }
        if(ans.answer === "Add a Department"){
            
        }
        if(ans.answer === "Add a Role"){
            
        }
        if(ans.answer === "Add an Employee"){
            
        }
        if(ans.answer === "Update an Employee's Role"){
            
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
            message:"What is the department this role belongs to?",
            name:"department",
            choices:[]
        }
    ]).then(ans=>{
    
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
            type:"list",
            message:"What is this employee's role?",
            name:"role",
            choices:[]
        },
        {
            type:"list",
            message:"Who is this employee's manager?",
            name:"role",
            choices:["None"]
        }
    ]).then(ans=>{
    
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