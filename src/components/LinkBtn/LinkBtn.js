import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import './btn.scss';

export const LinkBtn = React.memo(props => (
	<Link className='btn' to={props.link} onClick={props.onClickLink}>
		{props.linkText}
	</Link>
));

LinkBtn.propTypes = {
	link: PropTypes.string.isRequired,
	linkText: PropTypes.string.isRequired,
	onClickLink: PropTypes.func,
};
