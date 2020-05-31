import React from 'react';
import CarPng from '../Car.png';
import CarSvg from '../car.svg';

const Car = (props) => {
  return(
    <div>
      <img src={CarPng} alt="" className="carBorder" height={props}/>
      <img src={CarSvg} alt="" className="carBorder" />
    </div>
  )


}

export default Car;
