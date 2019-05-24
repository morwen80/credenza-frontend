import React, { Component } from 'react';
import ListCredenza from '../containers/ListCredenza'
import AddFoodItem from './AddFoodItem'
import { connect } from 'react-redux';
import  {fetchCredenza, addToCredenza}  from '../actions/credenzaActions'

class Home extends Component {

  render() {
    const {loading, credenza, addToCredenza} = this.props
    return (
      <div className="myCredenzaContainer">
        <AddFoodItem
          credenza={credenza}
          addToCredenza={addToCredenza}
        />

        {loading ? <h3>Loading...</h3> :
          <ListCredenza credenza={credenza} fetchCredenza={this.props.fetchCredenza
          } />
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    loading: state.loading,
    credenza: state.foodItems.foodItems
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCredenza: () => dispatch(fetchCredenza()),
    addToCredenza: newFoodItem => dispatch(addToCredenza(newFoodItem))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
