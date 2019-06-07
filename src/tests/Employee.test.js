import Employee from '../classes/Employee';

describe('the employee class', () => {
    test('constructor() should fail with TypeError if any parameters are of unexpected type', () => {
        const error = () => {
            new Employee();
        };
        expect(error).toThrow(TypeError);
    });

    test('loadQuery() should load database queries with columns (id, first_name, last_name)', () => {
        const query = [
            { id: 1, first_name: '1', last_name: '1'},
            { id: 2, first_name: '2', last_name: '2' },
            { id: 3, first_name: '3', last_name: '3' }
        ];
        const employeeArray = Employee.loadQuery(query);

        expect(Array.isArray(employeeArray)).toBe(true);
        expect(employeeArray.length).toBe(query.length);
    });

    test('loadQuery() should fail with TypeError if any columns are missing', () => {
        const error = () => {
            const query = [
                { id: 1, first_name: '1', last_name: '1' },
                { id: 2, first_name: '2', last_name: '2' },
                { id: 3, first_name: '3' }
            ];
            Employee.loadQuery(query);
        };
        expect(error).toThrow(TypeError);

    });

    test('should format names as last name comma first name.', () => {
        const id = 1111;
        const firstName = 'Alonzo';
        const lastName = 'Church';
        const employee = new Employee(id, firstName, lastName); 
        const name = employee.nameFormated();

        expect(typeof name).toEqual('string');
        expect(name).toEqual(`${lastName}, ${firstName}`);
    });
});