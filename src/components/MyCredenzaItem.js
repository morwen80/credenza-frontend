import React, {Component} from 'react';
import { connect } from 'react-redux';
import {addToFaves}  from '../actions/favesActions'

class MyCredenzaItem extends Component {

render(){
  const {food, id} = this.props.foodItemObj

  const addToFaves = (food) => {
    console.log(food)
    // this.props.addToFaves(this.props.foodItemObj)
  }


  return (
    <div className="credenzaItem">
      <ul>
        <li key={id}>
        <button onClick={() => this.addToFaves(food)}><i className="fas fa-star"></i></button>
        <span>
        {food}
        <button className="delete-food">x</button>
        </span>
        </li>
      </ul>
    </div>

  )}
}





const mapDispatchToProps = (dispatch, newFave) => {
  return {
    addToFaves: (newFave) => dispatch(addToFaves(newFave))
  }
}

export default connect(null, mapDispatchToProps)(MyCredenzaItem)
