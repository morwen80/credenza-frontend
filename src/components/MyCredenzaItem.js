import React, {Component} from 'react';
import CountButtons from './CountButtons'
class MyCredenzaItem extends Component {


render(){

  const {food, id, faved} = this.props.foodItemObj
  const {foodItemObj, newFaved, toggleFaved, incrementing, decrementing, removingFromCredenza} = this.props

  return (
    <div className="credenzaItem">
      <ul>
        <li key={id}>
          <span>
          <input
            type="checkbox"
            name="faved"
            id={id}
            checked={faved}
            onChange={() => toggleFaved(foodItemObj)}
            onClick={() => newFaved({...foodItemObj, faved:!faved})}
          />

            {food}
            <button onClick={() => removingFromCredenza(id)} className="delete-food">
              <i className="fas fa-trash-alt"></i>
            </button>

            <CountButtons
              key={id}
              foodObj={foodItemObj}
              incrementing={incrementing}
              decrementing={decrementing}
            />
          </span>
        </li>
      </ul>
    </div>

  )}
}

export default MyCredenzaItem
