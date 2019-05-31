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
import ListShiftsPage from '../ListShiftsPage/ListShiftsPage';
import Navbar from '../Navbar/Navbar';

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Redirect exact from="/" to="/list_shifts" />
                    <Route
                        exact path="/list_shifts"
                        component={ListShiftsPage}
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
