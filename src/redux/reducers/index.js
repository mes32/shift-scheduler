import { combineReducers } from 'redux';
import employees from './employees';
import shifts from './shifts';

const rootReducer = combineReducers({
    employees,
    shifts
});

export default rootReducer;
