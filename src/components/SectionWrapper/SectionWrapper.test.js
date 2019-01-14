import React from 'react';
import {shallow} from 'enzyme';
import {SectionWrapper} from './SectionWrapper';

describe('Test SectionWrapper component', () => {
	const wrapperShallow = shallow(
		<SectionWrapper
			form={true}
			link='testLink'
			linkText='testLinkTest'
			sectionClass='testSectionClass'
			title='testTitle'
			titleClass='testTitleClass'
		>
			{[]}
		</SectionWrapper>
	);

	it('should render', () => {
		expect(wrapperShallow).toHaveLength(1);
	});

	describe('Test <section>', () => {
		it('should render', () => {
			expect(wrapperShallow.find('section')).toHaveLength(1);
		});

		it('should contains class of value props.sectionClass', () => {
			expect(
				wrapperShallow.find('section').hasClass('testSectionClass')
			).toBeTruthy();
		});
	});

	describe('Test <h2>', () => {
		it('should render', () => {
			expect(wrapperShallow.find('h2')).toHaveLength(1);
		});

		it('should contains class of value props.titleClass', () => {
			expect(wrapperShallow.find('h2').hasClass('testTitleClass')).toBeTruthy();
		});

		it('should contains text child of value props.title', () => {
			expect(wrapperShallow.find('h2').prop('children')).toBe('testTitle');
		});
	});

	describe('Test <form>', () => {
		it('should render if value of props.form="true"', () => {
			expect(wrapperShallow.find('form')).toHaveLength(1);
		});

		it('should contains child if value of props.form="true"', () => {
			expect(wrapperShallow.find('form').prop('children')).toEqual(
				expect.arrayContaining([])
			);
		});

		it('should not render if value of props.form="false"', () => {
			wrapperShallow.setProps({form: false});

			expect(wrapperShallow.find('form')).toHaveLength(0);
		});
	});
});
