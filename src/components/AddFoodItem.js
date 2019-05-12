import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addToCredenza}  from '../actions/credenzaActions'

class AddFoodItem extends Component {
  constructor(){
    super()
    this.state = {
      food: "",
      itemnumber: 1,
      list_id: 1
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addToCredenza(this.state)
    this.setState({ food: "" })
  }


  render() {
    return(
      <div className="AddFoodItemComponent">
        <form onSubmit={this.handleSubmit} className="addItemForm">
        <button type="submit">Add Food Item</button>
        <div className="foodInput">
          <input
            placeholder="What do you have in your pantry?"
            value={this.state.food}
            name="food"
            onChange={this.handleChange}
          />

        </div>
          <br />
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    credenza: state.foodItems.foodItems
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addToCredenza: newFoodItem => dispatch(addToCredenza(newFoodItem))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddFoodItem)
