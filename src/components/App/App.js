import React from 'react';
import {
    HashRouter as Router,
    Route,
    Redirect,
    Switch,
} from 'react-router-dom';

import './App.css';
import AddShiftPage from '../AddShiftPage/AddShiftPage';
import Footer from '../Footer/Footer';
import ShiftSchedulePage from '../ShiftSchedulePage/ShiftSchedulePage';
import Navbar from '../Navbar/Navbar';

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Redirect exact from="/" to="/shift_schedule" />
                    <Route
                        exact path="/shift_schedule"
                        component={ShiftSchedulePage}
                    />
                    <Route
                        exact path="/add_shift"
                        component={AddShiftPage}
                    />
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
