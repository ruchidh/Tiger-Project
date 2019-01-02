import {
	combineReducers, createStore, applyMiddleware, compose,
} from 'redux';
import thunk from 'redux-thunk';

import route from './route';

const rootReducer = combineReducers({
	route,
});

const enhancers = [];
const middleware = [thunk];

const composeWithDevTools =	typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
	? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
	: compose;

const composedEnhancers = composeWithDevTools(applyMiddleware(...middleware), ...enhancers);

export default (initialState = {}) => createStore(rootReducer, initialState, composedEnhancers);
