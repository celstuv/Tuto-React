import React, {Component} from 'react';
import Singers from './Singers';

class Display extends Component {
  render() {
    return (
      <div>
        <h1>Musiciens</h1>
        <Singers name="Eric Clapton" age="74"/>
        <Singers name="Jimmy Hendrix" age="27"/>
        <Singers name="David Gilmour" age="73"/>
        <Singers name="Carlos Santana" age="71"/>
      </div>
    )
  }
}
export default Display;
