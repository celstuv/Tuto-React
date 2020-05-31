import React, {Component} from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  color:red;
  font-size:80px;
`
const Button = styled.button`
  background-color:black;
  color:white;
  padding:12px 13px;
  font-size:15px;
`


class Form4 extends Component {
  render() {
    return (
      <div>
        <Title>Titre</Title>
        <button className="alert alert-danger">Valider</button>
        <Button>Valider</Button>
      </div>
    )
  }
}

export default Form4;
