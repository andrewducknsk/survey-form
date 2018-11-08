import {createActions} from 'redux-actions';

const actionCreator = createActions({
	APP: {
		WRITE: {
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
	},
});

export const writeName = actionCreator.app.write.name;

export const writeSurname = actionCreator.app.write.surname;

export const writeFavoriteNumber = actionCreator.app.write.favorite.number;

export const writeFavoriteMusician = actionCreator.app.write.favorite.musician;

export const writeFavoriteColor = actionCreator.app.write.favorite.color;

export const changeStep = actionCreator.app.change.step;
