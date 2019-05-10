import React, {Component} from 'react';
// import  {incrementItemNumber}  from '../actions/credenzaActions'

class MyCredenzaItem extends Component {
  constructor() {
    super()
    this.state = {
      // itemnumber: this.props.itemnumber
    }
  }


render(){

  return (
    // <div className="credenzaItem">
    //   <ul>
    //     <li> <span>{this.props.food} ({this.props.itemnumber})
    //     </span>
    //
    //       <div className="incrementButtons">
    //         <button> <i className="fas fa-plus-square"></i></button>
    //         <button><i className="fas fa-minus-square"></i></button>
    //       </div>
    //     </li>
    //   </ul>
    // </div>
    <p id={this.props.id}>{this.props.food} ({this.props.itemnumber})</p>
  )}
}

// const mapStateToProps = state => {
//   return {
//   credenza: state.foodItems.foodItems
//   }

//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     incrementItemNumber: () => dispatch(incrementItemNumber())
//   }
// }

export default MyCredenzaItem
