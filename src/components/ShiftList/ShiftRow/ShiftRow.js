import React from 'react';

function ShiftRow(props) {
    return (
        <tr>
            <td>{props.shift.employee_id}</td>
        </tr>
    );
}

export default ShiftRow;