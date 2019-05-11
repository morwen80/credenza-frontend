import React, {Component} from 'react';
import { connect } from 'react-redux';
import  {incrementItemNumber, decrementItemNumber}  from '../actions/credenzaActions'

class MyCredenzaItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      itemnumber: props.itemnumber
    }
  }

  incrementItemNumber = () => {
    this.setState({itemnumber: this.state.itemnumber + 1 })
    // this.props.incrementItemNumber(this.state.itemnumber)
  }

  decrementItemNumber = () => {
    this.setState({itemnumber: this.state.itemnumber - 1 })
  }


render(){

  return (
    <div className="credenzaItem">
      <ul>
        <li>
        <span>{this.props.food} ({this.state.itemnumber})</span>

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
//   credenza: state.foodItems.foodItems
//   }
// }


const mapDispatchToProps = (dispatch, amount) => {
  return {
    incrementItemNumber: (amount) => dispatch(incrementItemNumber(amount)),
    decrementItemNumber: (amount) => dispatch(decrementItemNumber(amount))
  }
}

export default connect(mapDispatchToProps)(MyCredenzaItem)
