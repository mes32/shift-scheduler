DROP TABLE IF EXISTS employee_shift;
DROP TABLE IF EXISTS employee;

CREATE TABLE employee (
	id INTEGER PRIMARY KEY
	, first_name VARCHAR(100)
	, last_name VARCHAR(100)
);

CREATE TABLE employee_shift (
	employee_id INTEGER REFERENCES employee(id)
	, start_time TIMESTAMP
	, end_time TIMESTAMP
	, PRIMARY KEY(employee_id, start_time, end_time)
);
  