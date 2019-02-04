import {
    LOGGING_IN,
    LOG_IN_SUCCESS,
    LOG_IN_FAILURE,
} from '../actions';

const initialState = {
    stories: [],
    login:[],
    loggingIn: false,
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case  LOG_IN_SUCCESS:
        return {
            ...state,
            login: action.payload,
            loggingIn: false,
        }
        
        default:
        return state;
    }
}

export default reducer;