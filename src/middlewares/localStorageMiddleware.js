import {
	checkLocalStorage,
	loadLocalStorage,
	setLocalStorage,
	clearLocalStorage,
} from '../actions/index';
import {
	getLocalStorage,
	templateStorage,
	clearingLocalStorage,
	settingLocalStorage,
} from '../localStorage';

const localStorageMiddleware = store => next => action => {
	switch (action.type) {
		case checkLocalStorage.toString():
			// if (getLocalStorage !== null) {
			// console.log(getLocalStorage);
			// } else {
			// console.log(templateStorage);
			// }
			if (getLocalStorage !== null) {
				store.dispatch(loadLocalStorage(getLocalStorage));
			} else {
				store.dispatch(loadLocalStorage(templateStorage));
			}
			break;
		case setLocalStorage.toString():
			settingLocalStorage(store);
			break;
		case clearLocalStorage.toString():
			clearingLocalStorage();
			break;
		default:
			return next(action);
	}
	return next(action);
};

export default localStorageMiddleware;
