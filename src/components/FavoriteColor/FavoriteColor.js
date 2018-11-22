import React, {PureComponent} from 'react';

class FavoriteColor extends PureComponent {
	render() {
		const {color, number} = this.props;
		return (
			<label className='favorite-color__label'>
				<input
					className='favorite-color__checkbox'
					type='checkbox'
					name='favoriteColor'
					value={color}
				/>
				<span
					className={`favorite-color__tile favorite-color__tile--${number}`}
				/>
			</label>
		);
	}
}

export default FavoriteColor;
