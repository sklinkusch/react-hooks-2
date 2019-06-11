import React from 'react';
import logo from '../images/logo.svg';
import '../styles/App.css';
import ProductListClass from './ProductListClass';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ProductListClass />
      </header>
    </div>
  );
}

export default App;
