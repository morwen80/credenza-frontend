const initialState = {
  loading: false,
  error: null,
  foodItems: []
}

export default function credenzaReducer(state = initialState, action){
  switch(action.type) {

    case 'LOAD_CREDENZA':
      return {
        ...state,
        loading: true,
        error: null
      };

      case 'FETCH_CREDENZA_SUCCESS': {
        return {
          ...state,
          loading: false,
          foodItems: action.payload
        }
      }

      case 'FETCH_CREDENZA_ERROR': {
        return {
          ...state,
          loading: false,
          error: action.payload.error,
          foodItems: []
        }
      }

      // case 'UPDATE_ITEM_FOOD': {
      //   return {
      //     ...state,
      //     foodItems: {
      //       ...state.foodItems
      //       }
      //     }
      //   }


      case 'UPDATE_ITEM_FOOD': {
        const updatedFood = {
          ...state,
          foodItems: { ...state.foodItems }
      }
      return updatedFood
    };

    case 'ADD_TO_CREDENZA_BEGIN':
      return {
        ...state
      }

    case 'ADD_TO_CREDENZA':
      return {
        ...state,
        loading: false,
        foodItems: state.foodItems.concat(action.payload)
      };

    case 'REMOVE_FROM_CREDENZA':
      return {
        foodItems: state.foodItems.filter(foodItem => foodItem.id !== action.payload),
      }

    

    default:
      return state
  }
}
