import React, {Component} from 'react';
import myCss from '../myCss.css';
import styles from '../myCss.module.css';
import MyHead from './myHeaderOne';



class Form3 extends Component {
  render() {
    return (
      <div>
        <h1 className={styles.green}>Commentaire 1 </h1>
        <MyHead/>
        <p className="red"> Je suis en rouge ou bleu - deuxième méthode</p>
        <button>Valider</button>
      </div>
    )
  }
}

export default Form3;
