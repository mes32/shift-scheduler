import React, { Component } from 'react';
import { connect } from 'react-redux';

import ShiftRow from './ShiftRow/ShiftRow';

const DEFAULT_TIMEZONE = 'America/Chicago';

class ShiftList extends Component {
    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_SHIFTS' });
    }

    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>Start Time</th>
                        <th>End Time</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.shifts.map(
                        shift => <ShiftRow key={shift.id} shift={shift} timezone={DEFAULT_TIMEZONE} />
                    )}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="3">
                            Timezone: {DEFAULT_TIMEZONE}
                        </td>
                    </tr>
                </tfoot>
            </table>
        );
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    shifts: reduxStore.shifts
});

export default connect(mapReduxStoreToProps)(ShiftList);