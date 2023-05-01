USE employees_db;

-- View all Departments
SELECT name AS "Department", id FROM departments;

-- View all Roles
SELECT roles.id, title AS "Role", departments.name AS "Department", salary AS "Salary" FROM roles JOIN departments ON department_id = departments.id;

-- View all Employees
SELECT employees.id, first_name AS "First Name", last_name AS "Last Name", roles.title AS "Job Title", departments.name AS "Department", roles.salary AS "Salary", manager_id AS "Manager" FROM employees JOIN roles ON role_id = roles.id JOIN departments ON roles.department_id = departments.id;
