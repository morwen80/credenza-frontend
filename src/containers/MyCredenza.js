import React, {Component} from 'react';
import ListCredenza from './ListCredenza'
import AddFoodItem from '../components/AddFoodItem'
import { connect } from 'react-redux';
import  {fetchCredenza}  from '../actions/credenzaActions'

class MyCredenza extends Component {

  componentDidMount(){
    this.props.fetchCredenza();
  }

  render() {
    const {loading} = this.props
    return (
      <div className="myCredenzaContainer">
        <AddFoodItem />

        {loading ? <h3>Loading...</h3> :
          <ListCredenza />
        }
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    loading: state.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCredenza: () => dispatch(fetchCredenza())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyCredenza)
