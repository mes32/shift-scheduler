import { all } from 'redux-saga/effects';
import employeeSaga from './employees';
import shiftsSaga from './shifts';

export default function* rootSaga() {
    yield all([
        employeeSaga(),
        shiftsSaga()
    ]);
}