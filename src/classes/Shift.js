import moment from 'moment-timezone';

import Employee from './Employee';

const PARSE_FORMAT = 'YYYY-MM-DDTHH:mm:ss.SSSZ';
const DISPLAY_FORMAT = 'MMM D, YYYY – h:mm A';

class Shift {
    constructor(id, employeeID, firstName, lastName, startTime, endTime) {
        this.id = id;
        this.employee = new Employee(employeeID, firstName, lastName);
        this.startTime = moment(startTime, PARSE_FORMAT);
        this.endTime = moment(endTime, PARSE_FORMAT);
    }

    static loadQuery(queryResult) {
        let shiftArray = [];
        for (let row of queryResult) {
            const shift = new Shift(row.id, row.employee_id, row.first_name, row.last_name, row.start_time, row.end_time);
            shiftArray.push(shift);
        }
        return shiftArray;
    }

    getEmployeeName() {
        return this.employee.nameFormated();
    }

    startTimeFormated(timezone) {
        return this.startTime.tz(timezone).format(DISPLAY_FORMAT);
    }

    endTimeFormated(timezone) {
        return this.endTime.tz(timezone).format(DISPLAY_FORMAT);
    }
}

export default Shift;