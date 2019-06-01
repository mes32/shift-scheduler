import React from 'react';

function ShiftRow(props) {
    return (
        <tr>
            <td>{props.shift.employee_id}</td>
            <td>{props.shift.start_time}</td>
            <td>{props.shift.end_time}</td>
        </tr>
    );
}

export default ShiftRow;