import React from 'react';
import PropTypes from 'prop-types';

export const InputText = props => (
	<input
		className={`personal-information__field ${
			props.errorClass ? '' : 'personal-information__field--error'
		}`}
		type='text'
		name={props.name}
		placeholder={props.placeholder}
		onChange={props.onChange}
	/>
);

InputText.propTypes = {
	errorClass: PropTypes.bool.isRequired,
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	onChange: PropTypes.func,
};
