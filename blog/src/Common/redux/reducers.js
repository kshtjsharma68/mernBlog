import { combineReducers } from 'redux';
import loginReducer from '../../Common/Login/reducer';

const rootReducer = combineReducers({
                                     login:  loginReducer  
                                    });

export default rootReducer;                    