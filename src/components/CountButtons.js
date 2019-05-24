import React from 'react';

export default function CountButtons(props){
  return (
    <React.Fragment>
    -- {props.itemnumber}
      <button onClick={props.increment}> <i className="fas fa-plus-square"></i></button>
      <button onClick={props.decrement}><i className="fas fa-minus-square"></i></button>
    </React.Fragment>
  )
}
