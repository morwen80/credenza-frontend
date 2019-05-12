import React, {Component} from 'react';
import { connect } from 'react-redux';
import {updateItemFood, increment}  from '../actions/credenzaActions'

class MyCredenzaItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      itemnumber: this.props.foodItemObj.itemnumber
    }
  }

  incrementItemNumber = () => {
    // this.setState({itemnumber: this.state.itemnumber + 1 })
    // console.log(this.state.itemnumber)

    this.props.increment();
    this.props.updateItemFood(this.props.foodItemObj)
  }

  decrementItemNumber = () => {
    this.setState(prevState => {
      return {
        itemnumber: prevState.itemnumber - 1
      };
    });
  };


render(){
  return (
    <div className="credenzaItem">
      <ul>
        <li>
        <span>
        <i className="fas fa-shopping-basket"></i> 
        {this.props.foodItemObj.food} ({this.props.foodItemObj.itemnumber})</span>

          <div className="incrementButtons">
            <button onClick={this.incrementItemNumber}> <i className="fas fa-plus-square"></i></button>
            <button onClick={this.decrementItemNumber}><i className="fas fa-minus-square"></i></button>
          </div>
        </li>
      </ul>
    </div>

  )}
}




// const mapStateToProps = state => {
//   return {
//     credenza: state.foodItems.foodItems
//
//   }
// }


const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
    updateItemFood: (foodItem) => dispatch(updateItemFood(foodItem))
  }
}

export default connect(null, mapDispatchToProps)(MyCredenzaItem)
