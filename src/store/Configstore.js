import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import booksReducer from '../reducers/books';
import fetchReducer from '../reducers/fetch';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            books: booksReducer,
            fetch: fetchReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
};
