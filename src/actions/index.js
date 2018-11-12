import {createActions} from 'redux-actions';

const actionCreator = createActions({
	APP: {
		SET: {
			NAME: undefined,
			SURNAME: undefined,
			FAVORITE: {
				NUMBER: undefined,
				MUSICIAN: undefined,
				COLOR: undefined,
			},
		},
		CHANGE: {
			STEP: undefined,
		},
		LOCAL_STORAGE: {
			SET: undefined,
			LOAD: undefined,
			CHECK: undefined,
			CLEAR: undefined,
		},
		STORE: {
			RESET: undefined,
		},
	},
});

export const writeName = actionCreator.app.set.name;

export const writeSurname = actionCreator.app.set.surname;

export const writeFavoriteNumber = actionCreator.app.set.favorite.number;

export const writeFavoriteMusician = actionCreator.app.set.favorite.musician;

export const writeFavoriteColor = actionCreator.app.set.favorite.color;

export const changeStep = actionCreator.app.change.step;

export const resetStore = actionCreator.app.store.reset;

export const setLocalStorage = actionCreator.app.localStorage.set;

export const loadLocalStorage = actionCreator.app.localStorage.load;

export const checkLocalStorage = actionCreator.app.localStorage.check;

export const clearLocalStorage = actionCreator.app.localStorage.clear;
