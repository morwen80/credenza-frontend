import React, {Component} from 'react';

export default class CountButtons extends Component {

  render() {

    return (
      <React.Fragment>
        ({this.props.foodObj.itemnumber})
        <span className="indecresingBtns">
          <button onClick={() => this.props.decrementing(this.props.foodObj)}> <i className="fas fa-minus-square"></i></button>
          <button onClick={() => this.props.incrementing(this.props.foodObj)}><i className="fas fa-plus-square"></i></button>
        </span>
      </React.Fragment>
    )
  }
}
