import React, { Component } from 'react';
import { connect } from 'react-redux';

import ShiftRow from './ShiftRow/ShiftRow';

class ShiftList extends Component {
    // constructor(props) {
    //     super(props);
    // }

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
                        shift => <ShiftRow key={shift.id} shift={shift} />
                    )}
                </tbody>
            </table>
        );
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    shifts: reduxStore.shifts
});

export default connect(mapReduxStoreToProps)(ShiftList);