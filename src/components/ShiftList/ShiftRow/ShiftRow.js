import React from 'react';
import PropTypes from 'prop-types';

import Shift from '../../../classes/Shift';

function ShiftRow(props) {
    return (
        <tr>
            <td>{props.shift.employeeID}</td>
            <td>{props.shift.startTimeFormated(props.timezone)}</td>
            <td>{props.shift.endTimeFormated(props.timezone)}</td>
        </tr>
    );
}

ShiftRow.propTypes = {
    shift: PropTypes.instanceOf(Shift).isRequired,
    timezone: PropTypes.string.isRequired
};

export default ShiftRow;