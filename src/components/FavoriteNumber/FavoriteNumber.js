import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {RadioNumber} from '../RadioNumber/RadioNumber';
import {ValidError} from '../ValidError/ValidError';
import './favorite_number.scss';

class FavoriteNumber extends PureComponent {
	render() {
		const {numberError, numberValid, onChange} = this.props;

		return (
			<div className='favorite-number' onChange={onChange}>
				<h3 className='favorite-number__title'>Любимая цифра</h3>

				<RadioNumber text='0' value='0' name='favoriteNumber' />
				<RadioNumber text='1' value='1' name='favoriteNumber' />
				<RadioNumber text='2' value='2' name='favoriteNumber' />
				<RadioNumber text='3' value='3' name='favoriteNumber' />
				<RadioNumber text='4' value='4' name='favoriteNumber' />
				<RadioNumber text='5' value='5' name='favoriteNumber' />

				{numberValid ? null : <ValidError text={numberError} />}
			</div>
		);
	}
}

export default FavoriteNumber;

FavoriteNumber.propTypes = {
	numberError: PropTypes.string.isRequired,
	numberValid: PropTypes.bool.isRequired,
	onChange: PropTypes.func,
};
