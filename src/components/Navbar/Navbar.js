import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

function Navbar() {
    return (
        <div className="navbar-class">
            <div>
                <h1>Shift Scheduler</h1>
            </div>
            <div>
                <Link to='/shift_schedule'>Shift Schedule</Link> 
                <Link to='/add_shift'>Add Shift</Link>
            </div>
        </div>
    );
}

export default Navbar;