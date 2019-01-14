import React from 'react';
import {shallow, mount} from 'enzyme';
import {InputText} from './InputText';

describe('Test InputText component', () => {
	const onChangeFunc = jest.fn();

	const wrapperShallow = shallow(
		<InputText
			name='testName'
			errorClass={true}
			placeholder='inputText'
			onChange={onChangeFunc}
		/>
	);
	const wrapperMount = mount(
		<InputText
			name='testName'
			errorClass={true}
			placeholder='inputText'
			onChange={onChangeFunc}
		/>
	);

	it('should render', () => {
		expect(wrapperShallow.find('input')).toHaveLength(1);
	});

	it('should contains props.errorClass', () => {
		expect(wrapperMount.prop('errorClass')).toBeTruthy();
	});

	it('should not contains class at value props.error="true"', () => {
		expect(
			wrapperShallow.hasClass('personal-information__field--error')
		).toBeFalsy();
	});

	it('should contains class at value props.error="false"', () => {
		wrapperShallow.setProps({errorClass: false});

		expect(
			wrapperShallow.hasClass('personal-information__field--error')
		).toBeTruthy();
	});

	it('should contains correct placeholder of value props.placeholder', () => {
		expect(wrapperMount.find('input').instance().placeholder).toEqual(
			'inputText'
		);
	});

	it('should contains correct name of value props.name', () => {
		expect(wrapperMount.find('input').instance().name).toEqual('testName');
	});
});
