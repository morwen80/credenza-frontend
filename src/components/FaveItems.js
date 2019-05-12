import React, {Component} from 'react';
import { connect } from 'react-redux'

class FaveItems extends Component {

  render(){
    console.log("FaveItems", this.props.faves)
    const listOfFaves = this.props.faves.map(fave => <li key={fave.id}>- {fave.food}</li>)
    return (
      <div>
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
