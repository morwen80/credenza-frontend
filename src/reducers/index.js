import { combineReducers } from 'redux';
import credenzaReducer from './credenza_reducer';

const rootReducer = combineReducers({
  foodItems: credenzaReducer
})

export default rootReducer
