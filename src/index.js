import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import getStore from './store';
import * as serviceWorker from './serviceWorker';
import './sass/_scaffolding.scss';
import AppRouter from './components/AppRouter/AppRouter';

const store = getStore();

ReactDOM.render(
	<Provider store={store}>
		<AppRouter />
	</Provider>,
	document.querySelector('.app')
);

serviceWorker.unregister();
