import React from 'react';
import './App.css';
import Maman from './components/Maman';
import Display from './components/Display';
import Result from './components/Game';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <h1>Fonction dans React</h1>
        <Maman />
      <hr/>
      <h1>Destructuring ES6</h1>
        <Display />
      <hr/>
      <h1> Les Conditions dans React</h1>
        <Result />
      <hr/>
      <h1> Affichage des images dans React</h1>
        <Form />
    </div>
  );
}

export default App;
