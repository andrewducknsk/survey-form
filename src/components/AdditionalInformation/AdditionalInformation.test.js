import React from 'react';
import {shallow} from 'enzyme';
import {AdditionalInformation} from './AdditionalInformation';

describe('Test AdditionalInformation component', () => {
	const writeColor = jest.fn();
	const setLocalStorage = jest.fn();
	const changeStep = jest.fn();
	const onChange = jest.fn();
	const wrapperShallow = shallow(
		<AdditionalInformation
			writeFavoriteColor={writeColor}
			changeStep={changeStep}
			setLocalStorage={setLocalStorage}
			onChange={onChange}
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
			favoriteColor: [],
			isFavoriteColorValid: true,
			favoriteColorValidError: 'Выберите любимый цвет',
		};

		it('should initialize with initial state', () => {
			expect(wrapperShallow.state()).toEqual(initialState);
		});
	});
});
