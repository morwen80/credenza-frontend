import React, {Component} from 'react';

class FaveItems extends Component {

  render(){
    const itemsChecked = this.props.credenza.filter(item => item.faved === true)
    const listOfFaves = itemsChecked.map(fave => <li key={fave.id}> {fave.food}</li>)

    return (
      <div className="faveList">
      <h3>Favourite Items</h3>

      <ul>
        {listOfFaves.length < 1 ? <h3>No faves yet :( </h3> : listOfFaves}
      </ul>
      </div>
    )
  }
}


export default FaveItems
