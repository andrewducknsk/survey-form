import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import getStore from './store';
import * as serviceWorker from './serviceWorker';
import './sass/_scaffolding.scss';
import AppRouter from './components/AppRouter/AppRouter';

const store = getStore();

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<AppRouter />
		</Provider>
	</BrowserRouter>,
	document.querySelector('.app')
);

serviceWorker.unregister();
