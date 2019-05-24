import React, {Component} from 'react';

export default class CountButtons extends Component {

  render() {
    return (
      <React.Fragment>
        <button onClick={() => this.props.decrementing(this.props.foodObj)}> <i className="fas fa-minus-square"></i></button>
        {this.props.foodObj.itemnumber}
        <button onClick={() => this.props.incrementing(this.props.foodObj)}><i className="fas fa-plus-square"></i></button>

      </React.Fragment>
    )
  }
}
