import uuid from 'uuid';

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

      // case 'INCREMENT_ITEM_NUMBER': {
      //   return {
      //     ...state,
      //     loading: false,
      //     foodItems: {
      //       ...state.foodItems.itemNumber + action.amount
      //     }
      //   }
      // }

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

    // case 'ADD_TO_CREDENZA2':
    //   return {
    //     ...state,
    //     loading: false,
    //     foodItems: {
    //       id: action.id,
    //       food: action.food,
    //       itemnumber: action.number,
    //       list_item: 1
    //       }
    //   }

    default:
      return state
  }
}
