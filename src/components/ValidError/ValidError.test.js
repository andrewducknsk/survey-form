import React from 'react';
import {ValidError} from './ValidError';
import {shallow} from 'enzyme';

describe('Test ValidError component', () => {
	const wrapper = shallow(<ValidError text='Error' />);

	it('should render <p>', () => {
		expect(wrapper.find('p')).toHaveLength(1);
	});

	it('should render props.text', () => {
		expect(wrapper.find('p').props().children).toEqual('Error');
	});
});
