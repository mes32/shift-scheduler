import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddShiftForm extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <form>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                Employee ID:
                            </td>
                            <td>
                                <input type="number" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Start Time:
                            </td>
                            <td>
                                <input type="date" placeholder="Start Time" />
                                <input type="time" placeholder="Start Time" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                End Time:
                            </td>
                            <td>
                                <input type="date" />
                                <input type="time" />
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