import React from 'react';
import {shallow, mount} from 'enzyme';
import FavoriteMusician from './FavoriteMusician.js';

describe('Test FavoriteMusician component', () => {
	const wrapperShallow = shallow(
		<FavoriteMusician musicianError='testError' musicianValid={true} />
	);
	const wrapperMount = mount(
		<FavoriteMusician musicianError='testError' musicianValid={true} />
	);

	it('should render', () => {
		expect(wrapperShallow).toHaveLength(1);
	});

	it('should have <h3>', () => {
		expect(wrapperShallow.find('h3')).toHaveLength(1);
	});

	it('<h3> should contains text child', () => {
		expect(wrapperShallow.find('h3').prop('children')).toBeTruthy();
	});

	it('musicianError should have value "testError"', () => {
		expect(wrapperMount.prop('musicianError')).toBe('testError');
	});

	it('musicianValid should have bool type', () => {
		expect(wrapperMount.prop('musicianValid')).toBeTruthy();
	});
});
