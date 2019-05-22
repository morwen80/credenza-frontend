import React, {Component} from 'react';
import { connect } from 'react-redux';
import { removeFromCredenza } from '../actions/credenzaActions'
import MyCredenzaItem from '../components/MyCredenzaItem';

class ListCredenza extends Component {

render () {
const foodList = this.props.credenza.map((foodItem) =>
  <ul key={foodItem.id}>
    <li key={foodItem.id}>
      <MyCredenzaItem
        foodItemObj={foodItem}
        removeFromCredenza={this.props.removeFromCredenza}
      />
    </li>
  </ul>
  )

  return (
    <div className="listCredenza">
      {foodList.length < 1 ?
        <h2 className="emptyCredenza">Your credenza is currently empty. </h2> :
        foodList
      }
    </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeFromCredenza: (id) => dispatch(removeFromCredenza(id)),
  }
}

export default connect(null, mapDispatchToProps)(ListCredenza)
