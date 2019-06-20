import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
//Import all reducers and combine
import allReducer from '../redux/reducers';
import sagas from '../redux/saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
                        allReducer,
                        applyMiddleware(sagaMiddleware)
                        );

sagaMiddleware.run(sagas)

export default store;