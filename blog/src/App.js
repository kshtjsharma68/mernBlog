import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import { Provider } from 'react-redux';

import configureStore from './store';

/**
 * This is a functional component
 * We can use hooks in this component to use props inside this and with state
 */
const store = configureStore()

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Login />
      </div>
    </Provider>
  );
}

export default App;
