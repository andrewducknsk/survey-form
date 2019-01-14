import React from 'react';
import {shallow, mount} from 'enzyme';
import FavoriteNumber from './FavoriteNumber';

describe('Test FavoriteNumber component', () => {
	const onChange = jest.fn();

	const wraperShallow = shallow(
		<FavoriteNumber
			numberError='testError'
			numberValid={true}
			onChange={onChange}
		/>
	);

	const wraperMount = mount(
		<FavoriteNumber
			numberError='testError'
			numberValid={true}
			onChange={onChange}
		/>
	);

	it('should render', () => {
		expect(wraperShallow).toHaveLength(1);
	});

	it('should have child', () => {
		expect(wraperShallow.prop('children')).toBeTruthy();
	});

	it('should render <h3>', () => {
		expect(wraperShallow.find('h3')).toHaveLength(1);
	});

	it('should have child', () => {
		expect(wraperShallow.find('h3').prop('children')).toBeTruthy();
	});

	it('props numberError', () => {
		expect(wraperMount.prop('numberError')).toBe('testError');
	});

	if (typeof wraperMount.prop('numberValid') === 'boolean') {
		it('props numberValid true', () => {
			expect(wraperMount.prop('numberValid')).toBeTruthy();
		});
	} else {
		throw new Error('Invalid Error');
	}
});
