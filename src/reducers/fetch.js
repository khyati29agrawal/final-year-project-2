

import * as actionTypes from '../actions/actionType';

const initalState = {
    books:[],
    loading: false,
    error: 'there is error'
}

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_BOOK_START:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.FETCH_BOOK_FAIL:
            return {
                ...state,
                error: action.error,
                loading: false
            }
        case actionTypes.FETCH_BOOK_SUCCESS:
            return {
                ...state,
                books: action.books,
                error: null,
                loading: false
            }
        default:
            return state
    }
}

export default reducer