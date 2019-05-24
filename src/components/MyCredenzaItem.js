import React, {Component} from 'react';
import CountButtons from './CountButtons'
class MyCredenzaItem extends Component {

  // removingFromCredenza = (id) => {
  //   this.props.removeFromCredenza(id)
  // }

  // incrementing = (itemnumber) => {
  //   this.props.increment(itemnumber)
  // }


render(){
  const {food, id, faved} = this.props.foodItemObj
  const {foodItemObj, newFaved, toggleFaved, incrementing} = this.props

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

            <CountButtons
              key={id}
              foodObj={foodItemObj}
              // increment={this.props.increment}
              incrementing={incrementing}
            />


            <button onClick={() => this.props.removingFromCredenza(id)} className="delete-food">
              <i className="fas fa-trash-alt"></i>
            </button>
          </span>
        </li>
      </ul>
    </div>

  )}
}

export default MyCredenzaItem
