import React from 'react';
import './App.css';
import Maman from './components/Maman';
import Display from './components/Display';

function App() {
  return (
    <div className="App">
      <h1>Fonction dans React</h1>
      <Maman />
      <hr/>
      <h1>Destructuring ES6</h1>
      <Display />
    </div>
  );
}

export default App;
