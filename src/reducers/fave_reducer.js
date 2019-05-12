const initialState = {
    loading: false,
    faves: [],
    error: null
}

export default function favesReducer(state = initialState, action) {
    switch(action.type) {
        case 'LOAD_FAVES':
            return {
                ...state,
                loading: true
            }
        case 'FETCH_FAVES_SUCCESS':
            return {
                ...state,
                loading: false,
                faves: action.payload
            }
        case 'FETCH_FAVES_ERROR':
            return {
                ...state,
                loading: false,
                error: action.error
            }
        case 'ADD_TO_FAVES':
        return {
          ...state,
          loading: false,
          faves: state.faves.concat(action.payload)
          }

          case  'TOGGLE':
            return state.map(item => {
              if (item.id !== action.id) {
                return item;
              }
              return {
                ...item,
                faved: !item.faved
              }
            })

        default:
            return state;
    }
}
