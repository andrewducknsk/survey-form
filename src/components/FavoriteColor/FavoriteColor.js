import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {CheckboxColor} from '../CheckboxColor/CheckboxColor';
import {ValidError} from '../ValidError/ValidError';
import './favorite-color.scss';

class FavoriteColor extends PureComponent {
	render() {
		const {colorValid, colorError, onChange} = this.props;

		return (
			<div className='favorite-color' onChange={onChange}>
				<h3 className='favorite-color__title'>Любимый цвет</h3>
				<CheckboxColor color='Red' name='favoriteColor' />
				<CheckboxColor color='Orange' name='favoriteColor' />
				<CheckboxColor color='Yellow' name='favoriteColor' />
				<CheckboxColor color='Green' name='favoriteColor' />
				<CheckboxColor color='Cyan' name='favoriteColor' />
				<CheckboxColor color='Blue' name='favoriteColor' />
				<CheckboxColor color='Purple' name='favoriteColor' />
				<CheckboxColor color='Pink' name='favoriteColor' />
				<CheckboxColor color='Black' name='favoriteColor' />
				{colorValid ? null : <ValidError text={colorError} />}
			</div>
		);
	}
}

export default FavoriteColor;

FavoriteColor.propTypes = {
	colorValid: PropTypes.bool.isRequired,
	colorError: PropTypes.string.isRequired,
	onChange: PropTypes.func,
};
