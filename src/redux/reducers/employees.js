const defaultState = [];

function employeeReducer(state = defaultState, action) {
    switch (action.type) {
        case 'SET_EMPLOYEES':
            return action.payload;
        default:
            return state;
    }
};

export default employeeReducer;