import React, {Component} from 'react';
import MyCredenzaItem from '../components/MyCredenzaItem';
import {connect} from 'react-redux';

class ListCredenza extends Component {
render () {

console.log('list credenza', this.props.credenza)
const foodList = this.props.credenza.map((foodItem) =>
  <ul key={foodItem.id}>
  <li key={foodItem.id}>
  <MyCredenzaItem
    // food={foodItem.food}
    // itemnumber={foodItem.itemnumber}
    // list_id={foodItem.list_id}
    // key={foodItem.id}
    foodItemObj={foodItem}
    />
    </li>
    </ul>
  )

  // const foodListAgain = this.props.credenza.map( foodItem =>
  // <MyCredenzaItemNew key={foodItem.id}/>)

  return (
    <div className="listCredenza">
      {foodList}
    </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    credenza: state.foodItems.foodItems
  }
}


export default connect(mapStateToProps)(ListCredenza)
