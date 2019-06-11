import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Login from './components/Login';

/**
 * This is a functional component
 * We can use hooks in this component to use props inside this and with state
 */

function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
