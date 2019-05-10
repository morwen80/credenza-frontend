const initialState = {
  loading: false,
  shoppingList: []
}

const needReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'LOADING_SHOPPINGLIST':
      return {
        ...state,
        loading: true
      };

    case 'FETCH_SHOPPINGLIST':
      return {...state,
      shoppingList: action.payload,
      loading: false
    }

    default:
      return state
  }
}

export default needReducer
