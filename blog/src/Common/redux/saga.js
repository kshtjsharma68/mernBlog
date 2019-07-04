import { all } from 'redux-saga/effects';
import loginSaga from '../../Common/Login/saga';

export default function* rootSaga() {
    yield all([
        loginSaga()
    ]);
}