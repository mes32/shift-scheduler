import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddShiftForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employeeID: undefined,
            startDate: '',
            startTime: '09:00',
            endDate: '',
            endTime: '17:00'
        };
    }

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_EMPLOYEES' });
    }

    handleChange = (event) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
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
                                <select name="employeeID" value={this.state.employeeID} onChange={this.handleChange}>
                                    {this.props.employees.map(employee => 
                                        <option key={employee.id} value={employee.id}>{employee.nameFormated()} ... (id: {employee.id})</option>
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