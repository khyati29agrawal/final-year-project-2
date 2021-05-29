import Axios from 'axios';
import * as actionTypes from './actionType';

const newBookStart = () => {
    return {
        type: actionTypes.NEW_BOOK_START,
    }
}

const newBookFail = error => {
    return {
        type: actionTypes.NEW_BOOK_FAIL,
        error: error.message,
    }
}

const newBookSuccess = (data) => {
    return {
        type: actionTypes.NEW_BOOK_SUCCESS,
        data: data
    }
}

export const newBook = (data) => {
    return dispatch => {
        dispatch(newBookStart());
        console.log(data)
        const URL = 'http://127.0.0.1:8000/files';
        Axios.post(URL, data).then(res => {
            dispatch(newBookSuccess(res));
        }).catch(err => {
            console.log(err);
            dispatch(newBookFail(err));
        })

    }
}

