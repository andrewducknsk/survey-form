// Lib
import {handleActions} from 'redux-actions';
// Func
import {
	writeName,
	writeSurname,
	writeFavoriteNumber,
	writeFavoriteMusician,
	writeFavoriteColor,
	loadLocalStorage,
	resetStore,
} from '../actions';

export const FORM = handleActions(
	{
		[loadLocalStorage]: (state, action) => ({
			...state,
			personalInformation: action.payload.FORM.personalInformation,
			importantInformation: action.payload.FORM.importantInformation,
			additionalInformation: action.payload.FORM.additionalInformation,
		}),
		[resetStore]: (state, action) => ({
			...state,
			personalInformation: action.payload.FORM.personalInformation,
			importantInformation: action.payload.FORM.importantInformation,
			additionalInformation: action.payload.FORM.additionalInformation,
		}),
		[writeName]: (state, action) => ({
			...state,
			personalInformation: {
				...state.personalInformation,
				name: action.payload,
			},
		}),
		[writeSurname]: (state, action) => ({
			...state,
			personalInformation: {
				...state.personalInformation,
				surname: action.payload,
			},
		}),
		[writeFavoriteNumber]: (state, action) => ({
			...state,
			importantInformation: {
				...state.importantInformation,
				favoriteNumber: action.payload,
			},
		}),
		[writeFavoriteMusician]: (state, action) => ({
			...state,
			importantInformation: {
				...state.importantInformation,
				favoriteMusician: action.payload,
			},
		}),
		[writeFavoriteColor]: (state, action) => ({
			...state,
			additionalInformation: {
				...state.additionalInformation,
				favoriteColor: action.payload,
			},
		}),
	},
	{
		personalInformation: {
			name: ``,
			surname: ``,
		},
		importantInformation: {
			favoriteNumber: ``,
			favoriteMusician: ``,
		},
		additionalInformation: {
			favoriteColor: [],
		},
	}
);
