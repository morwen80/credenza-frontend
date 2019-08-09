import React, {Component} from 'react';
import { connect } from 'react-redux';
import { removeFromCredenza, editFoodItem} from '../actions/credenzaActions'
import MyCredenzaItem from '../components/MyCredenzaItem';

class ListCredenza extends Component {

  componentDidMount(){
    this.props.fetchCredenza();
  }

  removingFromCredenza = (id) => {
    this.props.removeFromCredenza(id)
  }

  toggleFaved = (obj) => {
    obj.faved = !obj.faved
  }

  newFaved = (obj) => {
    this.props.editFoodItem(obj)
  }

  incrementing = (obj) => {
    obj.itemNumber = obj.itemNumber + 1;
    this.props.editFoodItem(obj)
  }

  decrementing = (obj) => {
    if(obj.itemNumber > 1) {
      obj.itemNumber = obj.itemNumber - 1;
      this.props.editFoodItem(obj);
    }
    else {
      this.props.removeFromCredenza(obj.id)
    }
  }

render () {

const foodList = this.props.credenza.map(foodItem =>
    <li key={foodItem.id}>
      <MyCredenzaItem
        foodItemObj={foodItem}
        removingFromCredenza={this.removingFromCredenza}
        updateFaves={this.props.updateFaves}
        toggleFaved={this.toggleFaved}
        newFaved={this.newFaved}
        incrementing={this.incrementing}
        decrementing={this.decrementing}
      />
    </li>
  )

  return (
    <div className="listCredenza">
      {foodList.length < 1 ?
        <h2 className="emptyCredenza">Your credenza is currently empty. </h2> :
        <ul>{foodList}</ul>
      }
    </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeFromCredenza: (id) => dispatch(removeFromCredenza(id)),
    editFoodItem: (obj) => dispatch(editFoodItem(obj))
  }
}


export default connect(null, mapDispatchToProps)(ListCredenza)
