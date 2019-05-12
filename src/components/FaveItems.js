import React, {Component} from 'react';
import { connect } from 'react-redux'

class FaveItems extends Component {

  render(){
    const listOfFaves = this.props.faves.map(fave => <li key={fave.id}>- {fave.food}</li>)
    return (
      <div>
      <h1>Favourite Items</h1>
      <ul>
        {listOfFaves}
      </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    faves: state.faves.faves
  }
}


export default connect(mapStateToProps)(FaveItems)
