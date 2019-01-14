import {FORM} from './form';

describe('Test "form" reducers', () => {
	const initialReducer = {
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
	};

	it('should initialReducer', () => {
		expect(FORM(undefined, {type: 'initial'})).toEqual(initialReducer);
	});

	it('load localStorage', () => {
		expect(
			FORM(undefined, {
				type: 'APP/LOCAL_STORAGE/LOAD',
				payload: {
					FORM: {
						personalInformation: {
							name: 'load',
							surname: 'load',
						},
						importantInformation: {
							favoriteNumber: 'load',
							favoriteMusician: 'load',
						},
						additionalInformation: {
							favoriteColor: [],
						},
					},
				},
			})
		).toEqual({
			personalInformation: {
				name: 'load',
				surname: 'load',
			},
			importantInformation: {
				favoriteNumber: 'load',
				favoriteMusician: 'load',
			},
			additionalInformation: {
				favoriteColor: [],
			},
		});
	});

	it('reset store', () => {
		expect(
			FORM(undefined, {
				type: 'APP/STORE/RESET',
				payload: {
					FORM: {
						personalInformation: {
							name: 'reset',
							surname: 'reset',
						},
						importantInformation: {
							favoriteNumber: 'reset',
							favoriteMusician: 'reset',
						},
						additionalInformation: {
							favoriteColor: [],
						},
					},
				},
			})
		).toEqual({
			personalInformation: {
				name: 'reset',
				surname: 'reset',
			},
			importantInformation: {
				favoriteNumber: 'reset',
				favoriteMusician: 'reset',
			},
			additionalInformation: {
				favoriteColor: [],
			},
		});
	});

	describe('section reducers write', () => {
		it('write name', () => {
			expect(
				FORM(undefined, {type: 'APP/SET/NAME', payload: 'andrew'})
			).toEqual({
				...initialReducer,
				personalInformation: {
					...initialReducer.personalInformation,
					name: 'andrew',
				},
			});
		});

		it('write surname', () => {
			expect(
				FORM(undefined, {type: 'APP/SET/SURNAME', payload: 'kinev'})
			).toEqual({
				...initialReducer,
				personalInformation: {
					...initialReducer.personalInformation,
					surname: 'kinev',
				},
			});
		});

		it('write favoriteNumber', () => {
			expect(
				FORM(undefined, {type: 'APP/SET/FAVORITE/NUMBER', payload: '5'})
			).toEqual({
				...initialReducer,
				importantInformation: {
					...initialReducer.importantInformation,
					favoriteNumber: '5',
				},
			});
		});

		it('write favoriteMusician', () => {
			expect(
				FORM(undefined, {type: 'APP/SET/FAVORITE/MUSICIAN', payload: 'AC/DC'})
			).toEqual({
				...initialReducer,
				importantInformation: {
					...initialReducer.importantInformation,
					favoriteMusician: 'AC/DC',
				},
			});
		});

		it('write favoriteColor', () => {
			expect(
				FORM(undefined, {type: 'APP/SET/FAVORITE/COLOR', payload: ['red']})
			).toEqual({
				...initialReducer,
				additionalInformation: {
					...initialReducer.additionalInformation,
					favoriteColor: ['red'],
				},
			});
		});
	});
});
