DROP TABLE IF EXISTS employee_shift;
DROP TABLE IF EXISTS employee;

-- Employees at the company
CREATE TABLE employee (
	id SERIAL PRIMARY KEY
	, first_name VARCHAR(100)
	, last_name VARCHAR(100)
);

-- Scheduled work shifts for employees
CREATE TABLE employee_shift (
	employee_id INTEGER REFERENCES employee(id)
	, start_time TIMESTAMP
	, end_time TIMESTAMP
	, PRIMARY KEY(employee_id, start_time, end_time)
	, CONSTRAINT end_after_start CHECK (end_time > start_time)
	, CONSTRAINT exclude_overlapping_shifts EXCLUDE USING gist (int4range(employee_id, employee_id, '[]') WITH =, tsrange(start_time, end_time) WITH &&)
);
  