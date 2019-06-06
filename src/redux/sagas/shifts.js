import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

import Shift from '../../classes/Shift';

function* fetchShifts() {
    try {
        const response = yield axios.get('/api/shift');
        const shiftArray = yield Shift.loadQuery(response.data);
        yield put({ type: 'SET_SHIFTS', payload: shiftArray });
    } catch (error) {
        const errorMessage = `Unable to fetch employee shifts from server, ${error}`;
        console.log(error);
        alert(errorMessage);
    }
}

function* addShift(action) {
    try {
        yield axios.post('/api/shift', action.payload);
        yield put({ type: 'FETCH_SHIFTS' });
    } catch (error) {
        const errorMessage = `Unable to add employee shift to server, ${error}`;
        console.log(errorMessage);
        alert(errorMessage);
    }
}

function* shiftsSaga() {
    yield takeLatest('FETCH_SHIFTS', fetchShifts);
    yield takeLatest('ADD_SHIFT', addShift);
}

export default shiftsSaga;
