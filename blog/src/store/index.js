import { createStore, combineReducers } from 'redux';
//Import all reducers and combine
// import allReducer from '../redux/reducers';

const rootReducer = combineReducers({});

const configureStore = () => {
    return createStore(rootReducer);
}

export default configureStore;