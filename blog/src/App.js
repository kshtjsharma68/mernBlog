import React from 'react';
import Login from './components/Login';
import { Provider } from 'react-redux';

import store from './store';

/**
 * This is a functional component
 * We can use hooks in this component to use props inside this and with state
 */

function App() {
  return (
    <Provider store={store}>
        <Login />
    </Provider>
  );
}

export default App;
