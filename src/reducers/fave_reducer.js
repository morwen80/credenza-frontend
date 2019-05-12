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
        default:
            return state;
    }
}
