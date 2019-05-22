import React, {Component} from 'react';

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

export default AddFoodItem
