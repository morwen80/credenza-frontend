import React, {Component} from 'react';
import ListCredenza from './ListCredenza'
import AddFoodItem from '../components/AddFoodItem'
import { connect } from 'react-redux';
import  {fetchCredenza, addToCredenza}  from '../actions/credenzaActions'

class MyCredenza extends Component {

  componentDidMount(){
    this.props.fetchCredenza();
  }

  render() {
    const {loading, credenza, addToCredenza, updateFood} = this.props
    return (
      <div className="myCredenzaContainer">
        <AddFoodItem
          credenza={credenza}
          addToCredenza={addToCredenza}
        />

        {loading ? <h3>Loading...</h3> :
          <ListCredenza credenza={credenza}
          />
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

export default connect(mapStateToProps, mapDispatchToProps)(MyCredenza)
