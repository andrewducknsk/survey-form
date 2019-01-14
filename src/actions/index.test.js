import {actionCreator} from './index.js';

describe('Test Actions', () => {
	describe('Set section actions', () => {
		it('set name', () => {
			const setName = actionCreator.app.set.name('name');
			expect(setName).toEqual({type: 'APP/SET/NAME', payload: 'name'});
		});

		it('set surname', () => {
			const setSurname = actionCreator.app.set.surname('surname');
			expect(setSurname).toEqual({type: 'APP/SET/SURNAME', payload: 'surname'});
		});

		describe('favorite subsection actions', () => {
			it('set number', () => {
				const setFavoriteNumber = actionCreator.app.set.favorite.number(
					'number'
				);

				expect(setFavoriteNumber).toEqual({
					type: 'APP/SET/FAVORITE/NUMBER',
					payload: 'number',
				});
			});

			it('set musician', () => {
				const setFavoriteMusician = actionCreator.app.set.favorite.musician(
					'musician'
				);

				expect(setFavoriteMusician).toEqual({
					type: 'APP/SET/FAVORITE/MUSICIAN',
					payload: 'musician',
				});
			});

			it('set color', () => {
				const setFavoriteColor = actionCreator.app.set.favorite.color('color');

				expect(setFavoriteColor).toEqual({
					type: 'APP/SET/FAVORITE/COLOR',
					payload: 'color',
				});
			});
		});
	});

	describe('Change section actions', () => {
		it('change step', () => {
			const changeStep = actionCreator.app.change.step('step');

			expect(changeStep).toEqual({type: 'APP/CHANGE/STEP', payload: 'step'});
		});
	});

	describe('LocalStorage section actions', () => {
		it('localStorage set', () => {
			const localStorageSet = actionCreator.app.localStorage.set('set');

			expect(localStorageSet).toEqual({
				type: 'APP/LOCAL_STORAGE/SET',
				payload: 'set',
			});
		});

		it('localStorage load', () => {
			const localStorageLoad = actionCreator.app.localStorage.load('load');

			expect(localStorageLoad).toEqual({
				type: 'APP/LOCAL_STORAGE/LOAD',
				payload: 'load',
			});
		});

		it('localStorage check', () => {
			const localStorageCheck = actionCreator.app.localStorage.check('check');

			expect(localStorageCheck).toEqual({
				type: 'APP/LOCAL_STORAGE/CHECK',
				payload: 'check',
			});
		});

		it('localStorage clear', () => {
			const localStorageClear = actionCreator.app.localStorage.clear('clear');

			expect(localStorageClear).toEqual({
				type: 'APP/LOCAL_STORAGE/CLEAR',
				payload: 'clear',
			});
		});
	});

	describe('Store section actions', () => {
		it('store reset', () => {
			const storeReset = actionCreator.app.store.reset('reset');

			expect(storeReset).toEqual({
				type: 'APP/STORE/RESET',
				payload: 'reset',
			});
		});
	});
});
