import {takeEvery, put, take, call, all, fork} from 'redux-saga/effects';
import { SIGN_IN, REGISTER } from './actions';
import loginHelper from '../../helpers/loginHelper';
import Notification from '../../helpers/notificationHelper';

export function* watchSignIn() {
    yield takeEvery(SIGN_IN, function* ({payload}) {
        try {
            if ( yield loginHelper.validateLoginForm(payload) ) {
                let login = yield call(loginHelper.checkCredentials,payload);  //for passing arguments seperatly
            } else {
                let prop = {
                              type: 'error',
                              msg: 'No valid details to login into system. Fill all fields'  
                            };console.log(prop)
                return Notification(prop);
            }
    
        } catch (e) {
            Notification({ type: 'error', msg: JSON.stringify(e) });
        }
    });
        
}

export function* register() {
    yield takeEvery(REGISTER, function* ({payload}) {
        if ( yield loginHelper.validateLoginForm(payload) ) {
            let regsiter_response = yield call(loginHelper.createUser, payload);
            console.info(regsiter_response)
        }
    });
    
}

export default function* loginSaga() {
    yield all([
        fork(watchSignIn),
        fork(register)
    ]);
}