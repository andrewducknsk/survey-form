// Lib
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
// Func
import {
	writeFavoriteColor,
	changeStep,
	setLocalStorage,
} from '../../actions/index.js';
// Style
import '../../sass/AppRouter/additional-information/_additional-information.scss';
import '../../sass/AppRouter/additional-information//favorite-color/_favorite-color.scss';

class AdditionalInformation extends PureComponent {
	state = {
		favoriteColor: [],
		isFavoriteColorValid: true,
		favoriteColorValidError: 'Выберите любимый цвет',
	};

	handleOnChange = e => {
		const {value} = e.target;
		const {favoriteColor} = this.state;

		if (favoriteColor.includes(value)) {
			this.setState({
				favoriteColor: favoriteColor.filter(color => color !== value),
			});
		} else {
			this.setState({favoriteColor: [...favoriteColor, value]});
		}
	};

	handleOnClick = e => {
		const {writeFavoriteColor, changeStep, setLocalStorage} = this.props;
		const {favoriteColor} = this.state;

		if (this.favoriteColorValid(favoriteColor)) {
			writeFavoriteColor(favoriteColor);
			changeStep('/thanks');
			setLocalStorage();

			this.setState({favoriteColor: []});
		} else {
			e.preventDefault();
		}
	};

	favoriteColorValid = color => {
		if (color.length === 0) {
			this.setState({isFavoriteColorValid: false});

			return false;
		} else {
			this.setState({isFavoriteColorValid: true});

			return true;
		}
	};

	render() {
		const {isFavoriteColorValid, favoriteColorValidError} = this.state;

		return (
			<section className='additional-information'>
				<h2 className='additional-information__title'>
					Дополнительная информация
				</h2>
				<form className='additional-information__form'>
					<div className='favorite-color' onChange={this.handleOnChange}>
						<h3 className='favorite-color__title'>Любимый цвет</h3>
						<label className='favorite-color__label'>
							<input
								className='favorite-color__checkbox'
								type='checkbox'
								name='favoriteColor'
								value='red'
							/>
							<span className='favorite-color__tile favorite-color__tile--one' />
						</label>
						<label className='favorite-color__label'>
							<input
								className='favorite-color__checkbox'
								type='checkbox'
								name='favoriteColor'
								value='orange'
							/>
							<span className='favorite-color__tile favorite-color__tile--two' />
						</label>
						<label className='favorite-color__label'>
							<input
								className='favorite-color__checkbox'
								type='checkbox'
								name='favoriteColor'
								value='yellow'
							/>
							<span className='favorite-color__tile favorite-color__tile--three' />
						</label>
						<label className='favorite-color__label'>
							<input
								className='favorite-color__checkbox'
								type='checkbox'
								name='favoriteColor'
								value='green'
							/>
							<span className='favorite-color__tile favorite-color__tile--four' />
						</label>
						<label className='favorite-color__label'>
							<input
								className='favorite-color__checkbox'
								type='checkbox'
								name='favoriteColor'
								value='cyan'
							/>
							<span className='favorite-color__tile favorite-color__tile--five' />
						</label>
						<label className='favorite-color__label'>
							<input
								className='favorite-color__checkbox'
								type='checkbox'
								name='favoriteColor'
								value='blue'
							/>
							<span className='favorite-color__tile favorite-color__tile--six' />
						</label>
						<label className='favorite-color__label'>
							<input
								className='favorite-color__checkbox'
								type='checkbox'
								name='favoriteColor'
								value='purple'
							/>
							<span className='favorite-color__tile favorite-color__tile--seven' />
						</label>
						<label className='favorite-color__label'>
							<input
								className='favorite-color__checkbox'
								type='checkbox'
								name='favoriteColor'
								value='pink'
							/>
							<span className='favorite-color__tile favorite-color__tile--eight' />
						</label>
						<label className='favorite-color__label'>
							<input
								className='favorite-color__checkbox'
								type='checkbox'
								name='favoriteColor'
								value='black'
							/>
							<span className='favorite-color__tile favorite-color__tile--nine' />
						</label>
						{isFavoriteColorValid ? null : (
							<p className='favorite-color__error'>{favoriteColorValidError}</p>
						)}
					</div>
					<Link to='/thanks' className='btn' onClick={this.handleOnClick}>
						Продолжить
					</Link>
				</form>
			</section>
		);
	}
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
	writeFavoriteColor,
	changeStep,
	setLocalStorage,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AdditionalInformation);

AdditionalInformation.propTypes = {
	writeFavoriteColor: PropTypes.func.isRequired,
	changeStep: PropTypes.func.isRequired,
	setLocalStorage: PropTypes.func.isRequired,
};
