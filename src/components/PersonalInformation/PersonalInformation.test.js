import React from 'react';
import {shallow} from 'enzyme';
import {PersonalInformation} from './PersonalInformation';

describe('Test PersonalInformation component', () => {
	const writeName = jest.fn();
	const writeSurname = jest.fn();
	const changeStep = jest.fn();
	const setLocalStorage = jest.fn();

	const wrapperShallow = shallow(
		<PersonalInformation
			writeName={writeName}
			writeSurname={writeSurname}
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
			name: undefined,
			surname: undefined,
			isNameValid: true,
			isSurnameValid: true,
			isNameLengthValid: true,
			isSurnameLengthValid: true,
			langValidError: `Введите русскими буквами`,
			lengthValidError: `Не менее 2-х символов`,
		};

		it('should initialize with initial state', () => {
			expect(wrapperShallow.state()).toEqual(initialState);
		});
	});
});
