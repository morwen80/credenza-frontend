import { combineReducers } from 'redux';
import credenzaReducer from './credenza_reducer';
import favesReducer from './fave_reducer';

const rootReducer = combineReducers({
  foodItems: credenzaReducer,
  faves: favesReducer
})

export default rootReducer
