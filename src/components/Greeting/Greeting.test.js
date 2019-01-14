import React from 'react';
import {shallow} from 'enzyme';
import {Greeting} from './Greeting';

describe('Test Greeting component', () => {
	const changeStep = jest.fn();
	const setLocalStorage = jest.fn();

	const wrapperShallow = shallow(
		<Greeting changeStep={changeStep} setLocalStorage={setLocalStorage} />
	);

	it('should render', () => {
		expect(wrapperShallow).toHaveLength(1);
	});

	it('not should have child', () => {
		expect(wrapperShallow.prop('children')).toBeFalsy();
	});

	describe('Test props', () => {
		it('sectionClass should have value "greeting"', () => {
			expect(wrapperShallow.prop('sectionClass')).toBe('greeting');
		});

		it('title should have value "Ответе на пару вопросов"', () => {
			expect(wrapperShallow.prop('title')).toBe('Ответе на пару вопросов');
		});

		it('titleClass should have value "greeting__title"', () => {
			expect(wrapperShallow.prop('titleClass')).toBe('greeting__title');
		});

		it('form should have value "false"', () => {
			expect(wrapperShallow.prop('form')).toBeFalsy();
		});

		it('link should have value "/personal-information"', () => {
			expect(wrapperShallow.prop('link')).toBe('/personal-information');
		});

		it('linkText should have value ""Начать', () => {
			expect(wrapperShallow.prop('linkText')).toBe('Начать');
		});

		if (typeof wrapperShallow.prop('onClickLink') === 'function') {
			it('onClickLink should have "function"', () => {
				expect(wrapperShallow.prop('onClickLink')).toBeInstanceOf(Function);
			});
		} else if (typeof wrapperShallow.prop('onClickLink') === 'undefined') {
			it('onClickLink should have "undefined", if he is not in props', () => {
				expect(wrapperShallow.prop('onClickLink')).toBeUndefined();
			});
		} else {
			it(
				`if onClickLink have something other than "function", 
                when he was transferred to props, that throw error`
			);
			throw new Error('invalid type');
		}
	});
});
