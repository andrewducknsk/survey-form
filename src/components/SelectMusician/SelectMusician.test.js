import React from 'react';
import {shallow} from 'enzyme';
import SelectMusician from './SelectMusician';

describe('Test SelectMusician component', () => {
	const wrapperShallow = shallow(<SelectMusician name='testName' />);

	it('should render', () => {
		expect(wrapperShallow).toHaveLength(1);
	});

	describe('Test <select>', () => {
		it('should render', () => {
			expect(wrapperShallow.find('select')).toHaveLength(1);
		});

		it('should have child', () => {
			expect(wrapperShallow.find('select').prop('children')).toBeTruthy();
		});
	});

	describe('Test props', () => {
		it('name should have value "testName"', () => {
			expect(wrapperShallow.find('select').prop('name')).toBe('testName');
		});

		// if (typeof wrapperShallow.find('select').prop('onChange') === 'function') {
		// 	it('onChange should have type function', () => {
		// 		expect(wrapperShallow.find('select').prop('onChange')).toBeInstanceOf(
		// 			Function
		// 		);
		// 	});
		// } else if (
		// 	typeof wrapperShallow.find('select').prop('onChange') === undefined
		// ) {
		// 	it('if onChange not', () => {
		// 		expect(wrapperShallow.find('select').prop('onChange')).toBeUndefined();
		// 	});
		// } else {
		// 	it('', () => {
		// 		throw new Error('Invalid type');
		// 	});
		// }
	});
});
