
-- Insert mock data for company employees
INSERT INTO employee
    (first_name, last_name)
VALUES
    ('Paul', 'Manjusha'),
    ('Gladys', 'Trinity'),
    ('Rudolf', 'Chinonso'),
    ('Chandrakanta', 'Simone'),
    ('Theodore', 'Shantanu');

-- Insert mock data for employee's working shifts
INSERT INTO employee_shift
    (employee_id, start_time, end_time)
VALUES
    (1, TIMESTAMP '2019-05-31 09:00:00', TIMESTAMP '2019-05-31 17:00:00'),
    (1, TIMESTAMP '2019-06-03 09:00:00', TIMESTAMP '2019-06-03 17:00:00'),
    (2, TIMESTAMP '2019-05-31 09:00:00', TIMESTAMP '2019-05-31 17:00:00');