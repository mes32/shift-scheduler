import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

const DATE_FORMAT = 'YYYY-MM-DD';
const TIME_FORMAT = 'HH:mm';
const START_TIME_DEFAULT = '09:00';
const END_TIME_DEFAULT = '17:00';

class AddShiftForm extends Component {
    constructor(props) {
        super(props);
        const today = moment().format(DATE_FORMAT);
        this.state = {
            employeeID: '',
            startDate: today,
            startTime: START_TIME_DEFAULT,
            endDate: today,
            endTime: END_TIME_DEFAULT
        };
    }

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_EMPLOYEES' });
    }

    handleChange = (event) => {
        const name = event.target.name;
        let newState = {
            ...this.state,
            [name]: event.target.value
        }

        let startDate = newState.startDate;
        let startTime = newState.startTime;
        let endDate = newState.endDate;
        let endTime = newState.endTime;
        const startMoment = moment(startDate + startTime, DATE_FORMAT + TIME_FORMAT);
        const endMoment = moment(endDate + endTime, DATE_FORMAT + TIME_FORMAT);

        if (startMoment.isAfter(endMoment)) {
            if (name === 'startDate') {
                newState = {
                    ...newState,
                    endDate: startDate,
                    endTime: END_TIME_DEFAULT
                };
            } else if (name === 'startTime') {
                newState = {
                    ...newState,
                    endTime: startTime
                };
            } else if (name === 'endDate') {
                newState = {
                    ...newState,
                    startDate: endDate,
                    startTime: START_TIME_DEFAULT
                };
            } else if (name === 'endTime') {
                newState = {
                    ...newState,
                    startTime: endTime
                };
            }
        }
        this.setState(newState);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        if (this.state.employeeID && this.state.startTime && this.state.startDate && this.state.endTime && this.state.endDate) {
            const action = {
                type: 'ADD_SHIFT',
                payload: {
                    id: this.state.employeeID,
                    startTime: this.state.startDate + ' ' + this.state.startTime,
                    endTime: this.state.endDate + ' ' + this.state.endTime,
                }
            };
            console.log(action);
            this.props.dispatch(action);
            this.props.history.push('/shift_schedule');
        } else {
            alert('All fields are required in this form.');
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                Employee:
                            </td>
                            <td>
                                <select name="employeeID" value={this.state.employeeID} onChange={this.handleChange} required>
                                    <option value="" disabled hidden>-- Select Employee --</option>
                                    {this.props.employees.map(employee => 
                                        <option key={employee.id} value={employee.id}>{employee.nameFormated()} (id: {employee.id})</option>
                                    )}
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Start Time:
                            </td>
                            <td>
                                <input type="date" name="startDate" onChange={this.handleChange} value={this.state.startDate} />
                                <input type="time" name="startTime" onChange={this.handleChange} value={this.state.startTime} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                End Time:
                            </td>
                            <td>
                                <input type="date" name="endDate" onChange={this.handleChange} value={this.state.endDate} />
                                <input type="time" name="endTime" onChange={this.handleChange} value={this.state.endTime} />
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <input type="submit" value="Add Shift" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        );
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    employees: reduxStore.employees
});

export default connect(mapReduxStoreToProps)(AddShiftForm);