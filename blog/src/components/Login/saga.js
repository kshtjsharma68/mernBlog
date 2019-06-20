import {takeLatest, put, take, call, all, fork} from 'redux-saga/effects';
import { SIGN_IN } from './actions';
import loginHelper from '../../helpers/loginHelper';

export function* signIn() {
    try {
        const { payload } = yield take(SIGN_IN);
        if ( yield loginHelper.validateLoginForm(payload) ) {
            const check = yield call(loginHelper.checkCredentials,payload);  //for passing arguments seperatly
        }

    } catch (e) {
        console.error('Error', e)
    }
}

export default function* loginSaga() {
    yield all([
        fork(signIn)
    ]);
}