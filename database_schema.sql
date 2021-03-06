DROP TABLE IF EXISTS employee_shift;
DROP TABLE IF EXISTS employee;

-- Employees at the company
CREATE TABLE employee (
	id SERIAL PRIMARY KEY
	, first_name VARCHAR(100)
	, last_name VARCHAR(100)
);

-- Scheduled work shifts for employees
-- Note: Uses this stackoverflow post (Sergios Bagdasar) for comparing integer equality within gist
-- https://dba.stackexchange.com/questions/37351/postgresql-exclude-using-error-data-type-integer-has-no-default-operator-class
CREATE TABLE employee_shift (
	id SERIAL PRIMARY KEY
	, employee_id INTEGER REFERENCES employee(id)
	, start_time TIMESTAMP
	, end_time TIMESTAMP
	, CONSTRAINT end_after_start CHECK (end_time > start_time)
	, CONSTRAINT exclude_overlapping_shifts EXCLUDE USING gist (int4range(employee_id, employee_id, '[]') WITH =, tsrange(start_time, end_time) WITH &&)
);
  