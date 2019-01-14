import React from 'react';
import {shallow, mount} from 'enzyme';
import FavoriteColor from './FavoriteColor';

describe('Test FavoriteColor component', () => {
	const wrapperShallow = shallow(
		<FavoriteColor colorValid={true} colorError='testError' />
	);
	const wrapperMount = mount(
		<FavoriteColor colorValid={true} colorError='testError' />
	);

	it('should contains component', () => {
		expect(wrapperShallow).toHaveLength(1);
	});

	it('should contains childs', () => {
		expect(wrapperShallow.prop('children')).toBeTruthy();
	});

	describe('Tests <h3>', () => {
		it('should contains render', () => {
			expect(wrapperShallow.find('h3')).toHaveLength(1);
		});

		it('should contains child', () => {
			expect(wrapperShallow.find('h3').prop('children')).toBe('Любимый цвет');
		});
	});

	describe('Tests props this component', () => {
		it('colorError should have value "testError"', () => {
			expect(wrapperMount.prop('colorError')).toBe('testError');
		});
	});

	describe('Test props.colorValid', () => {
		if (typeof wrapperMount.props().colorValid === 'boolean') {
			it('colorValid should have value "true"', () => {
				expect(wrapperMount.prop('colorValid')).toBeTruthy();
			});

			it('if props.colorValid have value "false", that parent should have <p>', () => {
				wrapperMount.setProps({colorValid: false});

				expect(wrapperMount.find('p')).toHaveLength(1);
			});
		} else {
			it('colorValid not have valid type value', () => {
				throw new Error('Invalid type');
			});
		}
	});
});
