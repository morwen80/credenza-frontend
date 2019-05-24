import React, {Component} from 'react';
import { connect } from 'react-redux';
import { removeFromCredenza, updateFaves} from '../actions/credenzaActions'
import MyCredenzaItem from '../components/MyCredenzaItem';

class ListCredenza extends Component {

  componentDidMount(){
    this.props.fetchCredenza();
  }

  toggleFaved = (obj) => {
    obj.faved = !obj.faved
  }

  newFaved = (obj) => {
    this.props.updateFaves(obj)
  }

render () {
const foodList = this.props.credenza.map(foodItem =>
    <li key={foodItem.id}>
      <MyCredenzaItem
        foodItemObj={foodItem}
        removeFromCredenza={this.props.removeFromCredenza}
        updateFaves={this.props.updateFaves}
        toggleFaved={this.toggleFaved}
        newFaved={this.newFaved}
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
    updateFaves: (obj) => dispatch(updateFaves(obj))
    // updateFood: (obj) => dispatch(updateFood(obj)),
    // increment: (num) => dispatch(increment(num))
  }
}


export default connect(null, mapDispatchToProps)(ListCredenza)
