import * as actionTypes from '../actions/actionType';

const initalState = {
    data: null,
    error: null,
    loading: false,
}

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case actionTypes.NEW_BOOK_START:
            return {
                ...state,
                error: null,
                data: null,
                loading: true,
            }
        case actionTypes.NEW_BOOK_FAIL:
            return {
                ...state,
                error: action.error,
                loading: false
            }
        case actionTypes.NEW_BOOK_SUCCESS:
            return {
                ...state,
                data: action.data,
                error: null,
                loading: false
            }
        case actionTypes.NEW_BOOK_CLEAR:
            return {
                ...state,
                error: null,
                data: null,
                loading: false,
            }
        default:
            return state
    }
}

export default reducer
