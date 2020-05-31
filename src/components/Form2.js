import React, {Component} from 'react';
import myCss from '../myCss.css';
import MyHead from './myHeaderOne';

const titreRouge =  {
  fontSize: '50px',
  color:'red'
}

class Form2 extends Component {
  render() {
    const myClass = this.props.head ? ('blue') : ('red');
    return (
      <div>
        <h1 style={titreRouge}>Titre</h1>
        <h2 className="blue">Sous-Titre</h2>
        <MyHead/>
        <p className={`${myClass} bigFont`}>Je suis bleu ou rouge</p>
        <p className="red"> Je suis en rouge ou bleu - deuxième méthode</p>
        <button>Valider</button>
      </div>
    )
  }
}

export default Form2;
