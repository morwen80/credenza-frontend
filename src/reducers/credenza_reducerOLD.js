const initialState = {
  loading: false,
  error: '',
  foodItems: []
}

const credenzaReducer = (state = initialState, action) => {
  switch(action.type) {

    case 'LOAD_CREDENZA':
      return {
        ...state,
        loading: true,
        error: ""
      };

      case 'LOAD_CREDENZA_SUCCESS': {
        return {
          ...state,
          foodItems: action.payload,
          loading: false
        }
      }

      case 'LOAD_CREDENZA_ERROR': {
        return {
          ...state,
          loading: false,
          error: action.error
        }
      }

    case 'ADD_TO_CREDENZA2':
      return {
        ...state,
        loading: false,
        foodItems: state.foodItems.concat(action.payload)
      };

    case 'ADD_TO_CREDENZA':
      return {
        ...state,
        loading: false,
        foodItems: {
          id: action.id,
          food: action.food,
          num: 1,
          needToBuy: false
        }
      }

    default:
      return state
  }
}

export default credenzaReducer
