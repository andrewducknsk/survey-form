import React from 'react';
import {shallow} from 'enzyme';
import {ImportantInformation} from './ImportantInformation';

describe('Test ImportantInformation component', () => {
	const writeFavoriteNumber = jest.fn();
	const writeFavoriteMusician = jest.fn();
	const changeStep = jest.fn();
	const setLocalStorage = jest.fn();

	const wrapperShallow = shallow(
		<ImportantInformation
			writeFavoriteNumber={writeFavoriteNumber}
			writeFavoriteMusician={writeFavoriteMusician}
			changeStep={changeStep}
			setLocalStorage={setLocalStorage}
		/>
	);

	it('should render', () => {
		expect(wrapperShallow).toHaveLength(1);
	});

	it('should have child', () => {
		expect(wrapperShallow.prop('children')).toBeTruthy();
	});

	describe('Test state', () => {
		const initialState = {
			favoriteNumber: undefined,
			isFavoriteNumberValid: true,
			favoriteNumberValidError: 'Выберите любимое число',
			favoriteMusician: undefined,
			isFavoriteMusicianValid: true,
			favoriteMusicianValidError: 'Выберите любимую группу',
		};

		it('should initialize with initial state', () => {
			expect(wrapperShallow.state()).toEqual(initialState);
		});
	});
});
