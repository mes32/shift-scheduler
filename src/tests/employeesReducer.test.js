import employees from '../redux/reducers/employees';

test('Employees reducer should be an empty array by default.', () => {
    const returnState = employees(undefined, { type: undefined });

    expect(Array.isArray(returnState)).toBe(true);
    expect(returnState).toEqual([]);
});

test('Employees reducer should SET_EMPLOYEES to payload.', () => {
    const inputEmployees = ['employee1', 'employee2', 'employee3'];
    const returnState = employees(undefined, { type: 'SET_EMPLOYEES', payload: inputEmployees });

    expect(Array.isArray(returnState)).toBe(true);
    expect(returnState.length).toBe(inputEmployees.length);
    expect(returnState).toBe(inputEmployees);
});

test('Employees reducer should IGNORE actions unknown type.', () => {
    const initialEmployees = ['employee1', 'employee2', 'employee3'];
    const newEmployees = ['employee4', 'employee5', 'employee6'];
    const returnState = employees(initialEmployees, { type: 'IGNORE', payload: newEmployees });

    expect(Array.isArray(returnState)).toBe(true);
    expect(returnState.length).toBe(initialEmployees.length);
    expect(returnState).toBe(initialEmployees);
});