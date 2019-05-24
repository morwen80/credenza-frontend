import React, {Component} from 'react';

class AddFoodItem extends Component {
  constructor(){
    super()
    this.state = {
      food: ""
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
        <button type="submit">add food item</button>
        <div className="foodInput">
          <input
            placeholder="new pantry item"
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

export default AddFoodItem
