const initialState={
    quote: []
}

const kanyeReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'SET_QUOTE':
            return {
                ...state,
                quote: action.payload
            }
        default:
            return state
    }
}

export default kanyeReducer;