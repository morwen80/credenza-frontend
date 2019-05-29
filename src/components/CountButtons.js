import React from 'react';

const CountButtons = (props) => (
      <React.Fragment>
        <span className="howMany">[ {props.foodObj.itemnumber} ]</span>
        <span className="indecresingBtns">
          <button onClick={() => props.decrementing(props.foodObj)}> <i className="fas fa-minus-square"></i></button>
          <button onClick={() => props.incrementing(props.foodObj)}><i className="fas fa-plus-square"></i></button>
        </span>
      </React.Fragment>
    )

export default CountButtons
