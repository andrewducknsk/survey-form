import React from 'react';
import {shallow} from 'enzyme';
import {CheckboxColor} from './CheckboxColor';

describe('Test Checkbox component', () => {
	const wrapperShallow = shallow(
		<CheckboxColor color='testColor' name='testName' />
	);

	describe('Tests contains render', () => {
		it('should contains render', () => {
			expect(wrapperShallow).toHaveLength(1);
		});

		it('should contains <input>', () => {
			expect(wrapperShallow.find('input')).toHaveLength(1);
		});

		it('should contains <span>', () => {
			expect(wrapperShallow.find('span')).toHaveLength(1);
		});
	});

	describe('Tests contains value props', () => {
		it('name should have value "testName"', () => {
			expect(wrapperShallow.find('input').prop('name')).toBe('testName');
		});

		it('value should have value "testColor"', () => {
			expect(wrapperShallow.find('input').prop('value')).toBe('testColor');
		});

		it('should contains class "checkbox-color__tile--testcolor"', () => {
			expect(
				wrapperShallow.find('span').hasClass('checkbox-color__tile--testcolor')
			).toBeTruthy();
		});
	});
});
