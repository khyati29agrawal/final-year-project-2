import axios from 'axios';
import * as actionTypes from './actionType';


const fetchStart = () => {
    return {
        type: actionTypes.FETCH_BOOK_START
    }
}
const fetchFail = (error) => {
    return {
        type: actionTypes.FETCH_BOOK_FAIL,
        error: error
    }
}
const fetchSuccess = (resData) => {
    console.log(resData)
    return {
        type: actionTypes.FETCH_BOOK_SUCCESS,
        books: resData
    }
}

export const  fetchBooks =  (data)=> {
    return dispatch => {
       dispatch(fetchStart());
        const year = data.year
        const type = data.type
        const subject = data.subject
        return axios.get(`http://127.0.0.1:8000/books/${year}/${type}/${subject}`, { data })
            .then(handleErrors)
           .then(json => {
            dispatch(fetchSuccess(json.data.books))
            return json.data.books
        }).catch(err => {
            console.log(err);
            dispatch(fetchFail(err.response))
        })
    }
}
function handleErrors(response) {
    console.log(response)
    if (!response)
        throw Error(response.statusText)
    return response

}