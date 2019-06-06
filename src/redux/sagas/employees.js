import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

import Employee from '../../classes/Employee';

function* fetchEmployees() {
    try {
        const response = yield axios.get('/api/employee');
        const employeeArray = yield Employee.loadQuery(response.data);
        yield put({ type: 'SET_EMPLOYEES', payload: employeeArray });
    } catch (error) {
        const errorMessage = `Unable to fetch employee list from server, ${error}`;
        console.log(error);
        alert(errorMessage);
    }
}

function* employeeSaga() {
    yield takeLatest('FETCH_EMPLOYEES', fetchEmployees);
}

export default employeeSaga;
