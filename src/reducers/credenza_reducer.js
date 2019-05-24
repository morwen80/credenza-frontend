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


    case 'FETCH_CREDENZA_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload.error
    };

    case 'FETCH_CREDENZA_SUCCESS':
    return {
      ...state,
      loading: false,
      foodItems: action.payload
    };


    case 'ADD_TO_CREDENZA_BEGIN':
    return {
      ...state,
      loading: true,
      error: null
    };

    case 'ADD_TO_CREDENZA_SUCCESS':
      return {
        ...state,
        loading: false,
        error: null,
        foodItems: state.foodItems.concat(action.payload)
      };
    case 'ADD_TO_CREDENZA_ERROR':
      return {
        ...state,
         loading: false,
         error: action.error.message
      }

    case 'REMOVE_FROM_CREDENZA':
      return {
        foodItems: state.foodItems.filter(foodItem => foodItem.id !== action.payload),
      };

    case 'EDIT_FOOD_ATTEMPT':
      return {
        ...state,
         loading: true,
         error: null
      }

    case 'EDIT_FOOD_SUCCESS':
      const newFoodItems = state.foodItems.map(foodObj => foodObj.id === action.id ? {foodObj: action.payload} : foodObj)
    return {
      ...state,
      loading: false,
      error: null,
      foodItems: newFoodItems
    };

    case 'EDIT_FOOD_ERROR':
      return {
        ...state,
         loading: false,
         error: action.error.message
      }

      case 'INCREMENT_ATTEMPT':
        return {
          ...state,
           loading: true,
           error: null
        }

//     case 'INCREMENT_SUCCESS':
//     const incremented = state.foodItems.map(foodObj => foodObj.id === action.id ? {foodObj, itemnum: action.payload} : foodObj)
//   return {
//     ...state,
//     loading: false,
//     error: null,
//     foodItems: newFoodItems
// }
//       return {
//         ...state,
//           itemnumber: state.foodItems.itemnumber + 1
//         };

        case 'INCREMENT_ERROR':
          return {
            ...state,
             loading: false,
             error: action.error.message
          }

    default:
      return state
  }
}
