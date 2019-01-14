import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import SelectMusician from '../SelectMusician/SelectMusician';
import {ValidError} from '../ValidError/ValidError';
import './favorite-musician.scss';

class FavoriteMusician extends PureComponent {
	render() {
		const {musicianError, musicianValid, onChange} = this.props;

		return (
			<div className='favorite-musician'>
				<h3 className='favorite-musician__title'>Любимая музыкальная группа</h3>
				<SelectMusician onChange={onChange} name='favoriteMusician' />
				{musicianValid ? null : <ValidError text={musicianError} />}
			</div>
		);
	}
}

export default FavoriteMusician;

FavoriteMusician.propTypes = {
	musicianError: PropTypes.string.isRequired,
	musicianValid: PropTypes.bool.isRequired,
	onChange: PropTypes.func,
};
