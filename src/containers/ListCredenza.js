import React, {Component} from 'react';
import MyCredenzaItem from '../components/MyCredenzaItem';
import {connect} from 'react-redux';

class ListCredenza extends Component {
render () {

  // const foodList = props.credenza.map(item => <li key={item.id}>{item.id}</li>)

  // const renderFoodList = this.props.credenza.map(foodItem => <MyCredenzaItem
  //   key={foodItem.id}
  //   food={foodItem.food}
  //   number={foodItem.itemNumber}
  //   needToBuy={foodItem.needToBuy}
  //   /> )

console.log(this.props.credenza)
const foodList = this.props.credenza.map((foodItem, idx) =>
  <ul key={idx}>
  <li key={idx}>
  <MyCredenzaItem
    food={foodItem.food}
    itemnumber={foodItem.itemnumber}
    key={foodItem.id}
    list_id={foodItem.list_id}
    />
    </li>
    </ul>
  )

  return (
    <div className="listCredenza">

       {foodList}
    </div>
  )
}
}
//
const mapStateToProps = state => {
  return {
    credenza: state.foodItems.foodItems
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchCredenza: () => dispatch(fetchCredenza())
//   }
// }




export default connect(mapStateToProps)(ListCredenza)
