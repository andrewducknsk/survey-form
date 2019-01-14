import {appStep} from './step';

describe('Test "step" reducers', () => {
	const initialReducer = {step: '/'};

	it('should initialReducer', () => {
		expect(appStep(undefined, {type: 'unexpected'})).toEqual(initialReducer);
	});

	it('change step', () => {
		expect(
			appStep(undefined, {type: 'APP/CHANGE/STEP', payload: 'second'})
		).toEqual({step: 'second'});
	});

	it('reset store', () => {
		expect(
			appStep(undefined, {
				type: 'APP/STORE/RESET',
				payload: {
					appStep: {
						step: '/reset',
					},
				},
			})
		).toEqual({step: '/reset'});
	});

	it('load localStorage', () => {
		expect(
			appStep(undefined, {
				type: 'APP/LOCAL_STORAGE/LOAD',
				payload: {
					appStep: {
						step: '/load',
					},
				},
			})
		).toEqual({step: '/load'});
	});
});
