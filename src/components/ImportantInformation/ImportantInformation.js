import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {
	writeFavoriteMusician,
	writeFavoriteNumber,
	changeStep,
} from '../../actions/index';
import '../../sass/AppRouter/important-information/_important-information.scss';
import '../../sass/AppRouter/important-information/radio-group/_radio-group.scss';
import '../../sass/AppRouter/important-information/favorite-musician/_favorite-musician.scss';

class ImportantInformation extends PureComponent {
	state = {
		favoriteNumber: undefined,
		isFavoriteNumberValid: true,
		favoriteNumberValidError: `Выберите любимое число`,
		favoriteMusician: undefined,
		isFavoriteMusicianValid: true,
		favoriteMusicianValidError: `Выберите любимую группу`,
	};

	handleOnChange = e => {
		const {value, name} = e.target;

		this.setState({[name]: value});
	};

	handleOnClick = e => {
		const {writeFavoriteMusician, writeFavoriteNumber, changeStep} = this.props;
		const {favoriteMusician, favoriteNumber} = this.state;

		if (
			this.favoriteNumberValid(favoriteNumber) &&
			this.favoriteMusicianValid(favoriteMusician)
		) {
			writeFavoriteMusician(favoriteMusician);
			writeFavoriteNumber(favoriteNumber);
			changeStep(3);

			this.setState({favoriteNumber: undefined, favoriteMusician: undefined});
		} else {
			e.preventDefault();
		}
	};

	favoriteNumberValid = number => {
		if (number !== undefined && number !== ``) {
			this.setState({isFavoriteNumberValid: true});

			return true;
		} else {
			this.setState({isFavoriteNumberValid: false});

			return false;
		}
	};

	favoriteMusicianValid = musician => {
		if (musician !== undefined && musician !== ``) {
			this.setState({isFavoriteMusicianValid: true});

			return true;
		} else {
			this.setState({isFavoriteMusicianValid: false});

			return false;
		}
	};

	render() {
		const {
			isFavoriteNumberValid,
			favoriteNumberValidError,
			isFavoriteMusicianValid,
			favoriteMusicianValidError,
		} = this.state;

		return (
			<section className="important-information">
				<h2 className="important-information__title">
					Очень важная информация
				</h2>
				<form className="important-information__form">
					<div className="radio-group" onChange={this.handleOnChange}>
						<h3 className="radio-group__title">Любимая цифра</h3>
						<label className="radio-group__label">
							<p className="radio-group__text">1</p>
							<input
								className="radio-group__radio-btn"
								type="radio"
								value="1"
								name="favoriteNumber"
							/>
						</label>
						<label className="radio-group__label">
							<p className="radio-group__text">2</p>
							<input
								className="radio-group__radio-btn"
								type="radio"
								value="2"
								name="favoriteNumber"
							/>
						</label>
						<label className="radio-group__label">
							<p className="radio-group__text">3</p>
							<input
								className="radio-group__radio-btn"
								type="radio"
								value="3"
								name="favoriteNumber"
							/>
						</label>
						<label className="radio-group__label">
							<p className="radio-group__text">4</p>
							<input
								className="radio-group__radio-btn"
								type="radio"
								value="4"
								name="favoriteNumber"
							/>
						</label>
						<label className="radio-group__label">
							<p className="radio-group__text">5</p>
							<input
								className="radio-group__radio-btn"
								type="radio"
								value="5"
								name="favoriteNumber"
							/>
						</label>
						{isFavoriteNumberValid ? null : (
							<p className="radio-group__error">{favoriteNumberValidError}</p>
						)}
					</div>

					<div className="favorite-musician">
						<h3 className="favorite-musician__title">
							Любимая музыкальная группа
						</h3>
						<select
							className="favorite-musician__select"
							name="favoriteMusician"
							onChange={this.handleOnChange}
							required
						>
							<option value="">Выберите группу</option>
							<option value="queen">Queen</option>
							<option value="ac/dc">AC/DC</option>
							<option value="the beatles">The Beatles</option>
							<option value="kiss">Kiss</option>
						</select>
						{isFavoriteMusicianValid ? null : (
							<p className="favorite-musician__error">
								{favoriteMusicianValidError}
							</p>
						)}
					</div>

					<Link
						to="/additional-information"
						className="btn"
						onClick={this.handleOnClick}
					>
						Продолжить
					</Link>
				</form>
			</section>
		);
	}
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
	writeFavoriteNumber,
	writeFavoriteMusician,
	changeStep,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ImportantInformation);
