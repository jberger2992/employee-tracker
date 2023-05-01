USE employees_db;

INSERT INTO departments (name)
VALUES  ("Command"),
        ("Opperations"),
        ("Sciences");

INSERT INTO roles (title, salary, department_id)
VALUES  ("Captain", 100000, 1),
        ("Pilot", 70000, 1),
        ("Chief Engineer", 80000, 2),
        ("Opperations Officer", 70000, 2),
        ("Chief Medical Officer", 75000, 3),
        ("Science Officer", 70000, 3);

INSERT INTO employees (first_name, last_name, role_id)
VALUES  ("Kathryn", "Janeway", 1),
        ("Samantha", "Wildman", 6);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES  ("Tom", "Paris", 2, 1),
        ("B'Elanna", "Torres", 3, 1),
        ("Harry", "Kim", 4, 3),
        ("The", "Doctor", 5, 1),
        ("Joe", "Carey", 4, 3);


SELECT * FROM departments;
SELECT * FROM roles;
SELECT * FROM employees;