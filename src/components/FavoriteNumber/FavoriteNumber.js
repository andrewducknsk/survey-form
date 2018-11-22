import React, {PureComponent} from 'react';

class FavoriteNumber extends PureComponent {
	render() {
		const {text, value} = this.props;
		return (
			<label className='radio-group__label'>
				<p className='radio-group__text'>{text}</p>
				<input
					className='radio-group__radio-btn'
					type='radio'
					value={value}
					name='favoriteNumber'
				/>
			</label>
		);
	}
}

export default FavoriteNumber;
