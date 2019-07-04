import { SIGN_IN, SIGN_IN_SUCCESS } from './actions';

const initialState = {
    signin: false       //initial status
}

const loginReducer = ( state = initialState, action ) => { //Reducer from dispatch
    switch(action.type) {
        case SIGN_IN_SUCCESS:
            return { ...state, signin: true };
        default:
            return { ...state };
    }
}

export default loginReducer;