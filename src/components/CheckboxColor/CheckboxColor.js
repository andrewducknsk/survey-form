import React from 'react';
import PropTypes from 'prop-types';
import './checkbox_color.scss';

export const CheckboxColor = props => (
	<label className='checkbox-color__label'>
		<input
			className='checkbox-color__checkbox'
			type='checkbox'
			name={props.name}
			value={props.color}
		/>
		<span
			className={`checkbox-color__tile checkbox-color__tile--${props.color.toLowerCase()}`}
		/>
	</label>
);

CheckboxColor.propTypes = {
	color: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
};
