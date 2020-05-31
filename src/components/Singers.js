import React from 'react';

class Singers extends React.Component {

  render() {

    const {name, age} = this.props;
    return(
      <div>
        <p>Chanteur : {name} {age}</p>
      </div>
    )
  }
}
export default Singers;
