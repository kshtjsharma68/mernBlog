import { combineReducers } from 'redux';
import loginReducer from '../components/Login/reducer';

const rootReducer = combineReducers({
                                     login:  loginReducer  
                                    });

export default rootReducer;                    