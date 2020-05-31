import React, {Component} from 'react';
import Car from './Car';

class Form extends Component {

  state = {
    username:"",
    color:"",
    colors:["", "red", "blue","green","black","pink"],
    comment:""
  }

handlePseudo = (e) =>{
  this.setState({
    username:e.target.value
  })
  // console.log(e.target.value);
}
handleColor = (event) => {
  //console.log(event.target.value);
  this.setState({
    color:event.target.value
  })
}
handleComments = (event) => {
  this.setState({
    comment:event.target.value
  })
}
handleSubmitForm = (event) => {
  event.preventDefault();
console.log(`username: ${this.state.username} color: ${this.state.color} commentaire: ${this.state.comment} `);
}

  render() {
    return(
      <div>
        <Car color={this.state.color} height="200px"/>

        <h1>Commentaires</h1>

        <form onSubmit={this.handleSubmitForm}>
          <div>
            <label>Pseudo</label>
            <input type="text" value={this.state.username} onChange={this.handlePseudo}/>
          </div>
          <div>
            <label>Couleur</label>
            <select value={this.state.color} onChange={this.handleColor}>
              {
                this.state.colors.map((color, index)=> {
                  return (
                    <option key={index} value={color}>{color}</option>
                  )
                })
              }
            </select>
          </div>
          <div>
            <label>Commentaire</label>
            <textarea value={this.state.comment} onChange={this.handleComments}></textarea>
          </div>

          <button>Valider</button>
        </form>
      </div>
    )
  }
}

export default Form;