const NUMBER = 'number';
const STRING = 'string';

class Employee {
    constructor(id, firstName, lastName) {
        if (typeof id !== NUMBER || typeof firstName !== STRING || typeof lastName !== STRING) {
            throw new TypeError('Invalid inputs for class Employee');
        }

        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    static loadQuery(queryResult) {
        let employeeArray = [];
        for (let row of queryResult) {
            const employee = new Employee(row.id, row.first_name, row.last_name);
            employeeArray.push(employee);
        }
        return employeeArray;
    }

    nameFormated() {
        return `${this.lastName}, ${this.firstName}`;
    }
}

export default Employee;