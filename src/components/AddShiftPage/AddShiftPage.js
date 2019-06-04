import React from 'react';
import AddShiftForm from '../AddShiftForm/AddShiftForm';

function AddShiftPage(props) {
    return (
        <main>
            <h2>Add Shift</h2>
            <AddShiftForm history={props.history} />
        </main>
    );
}

export default AddShiftPage;