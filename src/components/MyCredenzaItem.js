import React, {Component} from 'react';
import { connect } from 'react-redux';
import {addToFaves}  from '../actions/favesActions'
import { removeFromCredenza } from '../actions/credenzaActions'

class MyCredenzaItem extends Component {

  addingToFaves = (food) => {
    this.props.addToFaves(food)
  }

  removingFromCredenza = (id) => {
    this.props.removeFromCredenza(id)
  }

render(){
  const {food, id} = this.props.foodItemObj

  return (
    <div className="credenzaItem">
      <ul>
        <li key={id}>
        <button onClick={() => this.addingToFaves(food)} className="toggleToFaves"><i className="fas fa-star"></i></button>
        <span>
        {food}
        <button onClick={() => this.removingFromCredenza(id)} className="delete-food">x</button>
        </span>
        </li>
      </ul>
    </div>

  )}
}





const mapDispatchToProps = dispatch => {
  return {
    addToFaves: (newFave) => dispatch(addToFaves(newFave)),
    removeFromCredenza: (id) => dispatch(removeFromCredenza(id))
  }
}

export default connect(null, mapDispatchToProps)(MyCredenzaItem)
