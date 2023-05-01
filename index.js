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
        },
    ]).then(ans=>{
        console.log(ans);
        if(ans.answer === "View All Departments"){
            
        }
    })
}

app.listen(PORT, () =>
    console.log(`App listening on http://localhost:${PORT}`)
);