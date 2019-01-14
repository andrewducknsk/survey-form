import React from 'react';
import PropTypes from 'prop-types';
import {LinkBtn} from '../LinkBtn/LinkBtn';

export const SectionWrapper = props => (
	<section className={props.sectionClass}>
		<h2 className={props.titleClass}>{props.title}</h2>
		{props.form ? (
			<form className={props.formClass}>{props.children}</form>
		) : null}
		<LinkBtn
			link={props.link}
			linkText={props.linkText}
			onClickLink={props.onClickLink}
		/>
	</section>
);

SectionWrapper.propTypes = {
	form: PropTypes.bool.isRequired,
	link: PropTypes.string.isRequired,
	linkText: PropTypes.string.isRequired,
	sectionClass: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	titleClass: PropTypes.string.isRequired,
	children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
	onClickLink: PropTypes.func,
	formClass: PropTypes.string,
};
