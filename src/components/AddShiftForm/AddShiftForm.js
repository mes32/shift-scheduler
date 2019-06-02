import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddShiftForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employeeID: '',
            startDate: '',
            startTime: '09:00',
            endDate: '',
            endTime: '17:00'
        };
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
            // history.push('/shift_schedule');
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                Employee ID:
                            </td>
                            <td>
                                <input type="number" name="employeeID" onChange={this.handleChange} value={this.state.employeeID} />
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

export default connect()(AddShiftForm);