import {createStore, compose, applyMiddleware} from 'redux';
import rootReducer from './reducers/index';
import localStorageMiddleware from './middlewares/localStorageMiddleware.js';

export default initialState =>
	createStore(
		rootReducer,
		initialState,
		compose(
			applyMiddleware(localStorageMiddleware),
			window.__REDUX_DEVTOOLS_EXTENSION__
				? window.__REDUX_DEVTOOLS_EXTENSION__()
				: f => f
		)
	);
