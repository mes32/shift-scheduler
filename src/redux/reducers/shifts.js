const defaultState = [];

function shiftsReducer(state = defaultState, action) {
    switch (action.type) {
        case 'SET_SHIFTS':
            return action.payload;
        default:
            return state;
    }
};

export default shiftsReducer;