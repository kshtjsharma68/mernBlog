import React from 'react';
import { Provider } from 'react-redux';
import Routes from './Common/Router';
import store from './Common/store';

/**
 * This is a functional component
 * We can use hooks in this component to use props inside this and with state
 */

function App() {
  return (
    <Provider store={store}>
        <Routes />
    </Provider>
  );
}

export default App;
