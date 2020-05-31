import React, {Component} from 'react';

class Result extends Component {

  state = {
    name: "Mario",
    winner :true
  }
  render() {

    {/*PREMIERE METHODE*/
    // let result;
    //
    // if (this.state.winner) {
    //   result = <h1> Bravo {this.state.name} !</h1>
    // } else {
    //   result = <h1>{this.state.name}, tu as perdu !</h1>
    // }
    //
    // return result;
    }

    {/*DEUXIEME METHODE*/
    // return (
    //   this.state.winner ? (<h1> Bravo {this.state.name} !</h1>) : (<h1>{this.state.name}, tu as perdu !</h1>)
    // )
    }

    {/*TROISIEME METHODE - si winner:true l'affichage se fera*/ }
    return this.state.winner && <h1> Bravo {this.state.name} !</h1>



  }
}

export default Result;
