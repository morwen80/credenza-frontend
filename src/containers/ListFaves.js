import React, {Component} from 'react';
// import ListCredenza from './ListCredenza'
import FaveItems from '../components/FaveItems'
import { connect } from 'react-redux';
import {fetchCredenza}  from '../actions/credenzaActions'

class ListFaves extends Component {

  componentDidMount(){
    this.props.fetchCredenza();
  }

  render() {
    return (
      <div className="favesContainer">
        {this.props.loading ? <h3>Loading...</h3> :
          <FaveItems
            credenza={this.props.credenza}
            />
        }
      </div>
    )
  }
}




const mapStateToProps = state => {
  return {
    // loading: state.faves.loading,
    // faves: state.faves.faves,
    credenza: state.foodItems.foodItems
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCredenza: () => dispatch(fetchCredenza()),
    // fetchFaves: () => dispatch(fetchFaves()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListFaves)
