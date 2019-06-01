import { all } from 'redux-saga/effects';
import shiftsSaga from './shifts';

export default function* rootSaga() {
    yield all([
        shiftsSaga()
    ]);
}