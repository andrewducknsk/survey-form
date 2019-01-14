// Lib
import {handleActions} from 'redux-actions';
// Action
import {changeStep, resetStore, loadLocalStorage} from '../../actions/index';

export const appStep = handleActions(
	{
		[changeStep]: (state, action) => ({
			...state,
			step: action.payload,
		}),
		[resetStore]: (state, action) => ({
			...state,
			step: action.payload.appStep.step,
		}),
		[loadLocalStorage]: (state, action) => ({
			...state,
			step: action.payload.appStep.step,
		}),
	},
	{
		step: `/`,
	}
);
