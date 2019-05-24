import React, {Component} from 'react';

class MyCredenzaItem extends Component {

  removingFromCredenza = (id) => {
    this.props.removeFromCredenza(id)
  }

  // toggleFaved = (obj) => {
  //   const newObj = {...obj,
  //     faved: !obj.faved
  //   }
  //   this.props.updateFaves(newObj)
  // }

render(){
  const {food, id, faved} = this.props.foodItemObj

  return (
    <div className="credenzaItem">
      <ul>
        <li key={id}>
          <span>
          <input
            type="checkbox"
            name="faved"
            checked={faved}
            onChange={() => this.props.toggleFaved(this.props.foodItemObj)}
            onClick={() => this.props.newFaved({...this.props.foodItemObj, faved:!faved})}
          />
            {food}

            <button onClick={() => this.removingFromCredenza(id)} className="delete-food">
              <i className="fas fa-trash-alt"></i>
            </button>
          </span>
        </li>
      </ul>
    </div>

  )}
}

export default MyCredenzaItem
