import React from 'react';
import PropTypes from 'prop-types';
import './valid-error.scss';

export const ValidError = props => <p className='valid-error'>{props.text}</p>;

ValidError.propTypes = {
	text: PropTypes.string.isRequired,
};
