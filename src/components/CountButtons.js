import React, {Component} from 'react';

export default class CountButtons extends Component {
  // state = {
  //   itemnumber: this.props.foodObj.itemnumber
  // }

  // incrementing = (obj) => {
  //   this.setState({
  //     itemnumber: this.state.itemnumber + 1
  //   })
  //
  //
  //   // this.props.increment({...obj, itemnumber: this.state.itemnumber})
  //   this.props.increment(obj)
  // }




  render() {
    return (
      <React.Fragment>
        <button onClick={this.props.decrementing}> <i className="fas fa-minus-square"></i></button>
        {this.props.foodObj.itemnumber}
        <button onClick={() => this.props.incrementing(this.props.foodObj)}><i className="fas fa-plus-square"></i></button>

      </React.Fragment>
    )
  }
}
