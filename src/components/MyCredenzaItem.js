import React, {Component} from 'react';

class MyCredenzaItem extends Component {

  togglingToFaves = (food) => {
    if(food.faved === true) {
      this.props.removeFromFaves(food.id);
    }
    else {
      this.props.addToFaves(food.food);
    }
  }

  removingFromCredenza = (id) => {
    this.props.removeFromCredenza(id)
  }

render(){
  const {food, id, faved} = this.props.foodItemObj

  return (
    <div className="credenzaItem">
      <ul>
        <li key={id}>
          <span>
            {food}
            <button onClick={() => this.removingFromCredenza(id)} className="delete-food"><i className="fas fa-trash-alt"></i></button>
          </span>
        </li>
      </ul>
    </div>

  )}
}

export default MyCredenzaItem
