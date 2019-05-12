import React, {Component} from 'react';
// import ListCredenza from './ListCredenza'
import FaveItems from '../components/FaveItems'
import { connect } from 'react-redux';
import  {fetchFaves}  from '../actions/favesActions'

class FavesContainer extends Component {

  componentDidMount(){
    this.props.fetchFaves();
  }

  render() {
    return (
      <div className="favesContainer">
        {this.props.loading ? <h3>Loading...</h3> :
          <FaveItems />
        }
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    loading: state.faves.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFaves: () => dispatch(fetchFaves())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavesContainer)
