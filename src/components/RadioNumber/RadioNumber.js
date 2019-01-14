import React from 'react';
import PropTypes from 'prop-types';
import './radio_number.scss';

export const RadioNumber = props => (
	<label className='radio-number__label'>
		<p className='radio-number__text'>{props.text}</p>
		<input
			className='radio-number__radio-btn'
			type='radio'
			value={props.value}
			name={props.name}
		/>
	</label>
);

RadioNumber.propTypes = {
	text: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
};
