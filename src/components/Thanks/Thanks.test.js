import React from 'react';
import {shallow} from 'enzyme';
import {Thanks} from './Thanks';

describe('Test Thanks component', () => {
	const resetStore = jest.fn();
	const clearLocalStorage = jest.fn();
	const wrapperShallow = shallow(
		<Thanks resetStore={resetStore} clearLocalStorage={clearLocalStorage} />
	);

	it('should render', () => {
		expect(wrapperShallow).toHaveLength(1);
	});

	describe('Test props', () => {
		// it('comparison with snapshot', () => {
		// 	expect(wrapperShallow).toMatchSnapshot();
		// });

		// or

		it('sectionClass should value "thanks"', () => {
			expect(wrapperShallow.prop('sectionClass')).toBe('thanks');
		});

		it('titleClass should value "thanks__title!"', () => {
			expect(wrapperShallow.prop('titleClass')).toBe('thanks__title');
		});

		it('title should value "Благодарим за ответы!"', () => {
			expect(wrapperShallow.prop('title')).toBe('Благодарим за ответы!');
		});

		it('form should value "false"', () => {
			expect(wrapperShallow.prop('form')).toBeFalsy();
		});

		it('link should value "/"', () => {
			expect(wrapperShallow.prop('link')).toBe('/');
		});

		it('linkText should value "Пожалуйста"', () => {
			expect(wrapperShallow.prop('linkText')).toBe('Пожалуйста');
		});
	});
});
