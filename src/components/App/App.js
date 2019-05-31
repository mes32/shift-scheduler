import React from 'react';
import {
    HashRouter as Router,
    Route,
    Redirect,
    Switch,
} from 'react-router-dom';

import './App.css';
import AddShiftPage from '../AddShiftPage/AddShiftPage';
import ListShiftsPage from '../ListShiftsPage/ListShiftsPage';

function App() {

        return (
            <Router>
                <div>
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
                </div>
            </Router>
        );
}

export default App;
