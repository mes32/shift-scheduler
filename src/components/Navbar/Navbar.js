import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <Link to='/shift_schedule'>Shift Schedule</Link> 
            <Link to='/add_shift'>Add Shift</Link>
        </div>
    );
}

export default Navbar;