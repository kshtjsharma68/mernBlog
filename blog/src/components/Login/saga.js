import {takeLatest, put, take, call, all, fork} from 'redux-saga/effects';
import { SIGN_IN } from './actions';
import loginHelper from '../../helpers/loginHelper';

export function* signIn() {
    try {
        const { payload } = yield take(SIGN_IN);

        const check = yield call(loginHelper.checkCredentials,payload);  //for passing arguments seperatly
        const check2 = yield loginHelper.checkCredentials(payload);  //Direct function calling
    } catch (e) {console.log('errorrororo')
        console.error('Error', e)
    }
}

export default function* loginSaga() {
    yield all([
        fork(signIn)
    ]);
}