import React from 'react';
import './App.css';
import Maman from './components/Maman';
import Display from './components/Display';
import Result from './components/Game';
import Form from './components/Form';
import Form2 from './components/Form2';
import Form3 from './components/Form3';

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
      <hr/>
      <h1> Le CSS dans React</h1>
        <Form2 head={false}/>
      <hr/>
      <h1> Le CSS dans React 2</h1>
        <Form3 head={false}/>
    </div>
  );
}

export default App;
