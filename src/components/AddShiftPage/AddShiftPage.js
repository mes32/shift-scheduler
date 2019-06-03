import React from 'react';
import AddShiftForm from '../AddShiftForm/AddShiftForm';

function AddShiftPage(props) {
    return (
        <div>
            <h2>Add Shift</h2>
            <AddShiftForm history={props.history} />
        </div>
    );
}

export default AddShiftPage;