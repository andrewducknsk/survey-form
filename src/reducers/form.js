import {handleActions} from 'redux-actions';
import {
	writeName,
	writeSurname,
	writeFavoriteNumber,
	writeFavoriteMusician,
	changeStep,
	writeFavoriteColor,
} from '../actions';

export const FORM = handleActions(
	{
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
		[changeStep]: (state, action) => ({
			...state,
			step: action.payload,
		}),
	},
	{
		personalInformation: {
			name: ``,
			surname: ``,
		},
		importantInformation: {
			favoriteNumber: [],
			favoriteMusician: [],
		},
		additionalInformation: {
			favoriteColor: ``,
		},
		step: 1,
	}
);
