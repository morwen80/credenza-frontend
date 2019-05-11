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

      case 'INCREMENT_ITEM_NUMBER': {
        return {
          ...state,
          foodItems: {
            ...state.foodItems.itemnumber + 1
            }
          }
        }

        case 'DECREMENT_ITEM_NUMBER': {
          return {
            ...state,
            foodItems: {
              ...state.foodItems.itemnumber - 1
              }
            }
          }

    case 'ADD_TO_CREDENZA_BEGIN':
      return {
        ...state
      }

    case 'ADD_TO_CREDENZA':
      return {
        ...state,
        loading: false,
        foodItems: state.foodItems.concat(action.payload)
        }


    default:
      return state
  }
}
