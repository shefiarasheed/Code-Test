import { SET_USER_NAME, SET_USER_AGE, INCREASE_AGE, GET_CITIES } from './actions';

const initialState = {

    cities: [],
}

function userReducer(state = initialState, action) {
    switch (action.type) {
    
        case GET_CITIES:
            return { ...state, cities: action.payload };
        default:
            return state;
    }
}

export default userReducer;