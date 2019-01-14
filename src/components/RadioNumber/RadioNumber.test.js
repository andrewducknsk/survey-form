import React from 'react';
import {shallow, mount} from 'enzyme';
import {RadioNumber} from './RadioNumber';

describe('Test FavoriteNumber component', () => {
	const wrapperShallow = shallow(
		<RadioNumber text='testText' value='testValue' />
	);
	const wrapperMount = mount(<RadioNumber text='testText' value='testValue' />);

	it('should render <label>', () => {
		expect(wrapperShallow.find('label')).toHaveLength(1);
	});

	describe('Test <input>', () => {
		it('should render', () => {
			expect(wrapperShallow.find('input')).toHaveLength(1);
		});

		it('should contains type="radio"', () => {
			expect(wrapperMount.find('input').instance().type).toEqual('radio');
		});

		it('should contains value of props.value', () => {
			expect(wrapperMount.find('input').instance().value).toEqual('testValue');
		});
	});

	describe('Tesc <p>', () => {
		it('should render', () => {
			expect(wrapperShallow.find('p')).toHaveLength(1);
		});

		it('should contains text children of props.text', () => {
			expect(wrapperShallow.find('p').props().children).toEqual('testText');
		});
	});
});
