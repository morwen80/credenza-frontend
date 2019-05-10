import React, {Component} from 'react';
import { connect } from 'react-redux';
import MyCredenzaItem from './MyCredenzaItem'

class Fooditems extends Component {
  render() {
    const newFoodItem = this.props.credenza.map(foodItem => <MyCredenzaItem
      key={foodItem.id}
      food={foodItem.food}
      itemnumber={foodItem.itemnumber}
        />
      )
    return (
      <div>
        food items component
        {newFoodItem}
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    credenza: state.foodItems.foodItems
  }
}

export default connect(mapStateToProps)(Fooditems)
