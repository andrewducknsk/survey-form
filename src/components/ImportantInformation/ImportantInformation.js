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
		favoriteMusician: undefined,
	};

	handleOnChange = e => {
		const {value, name} = e.target;

		this.setState({[name]: value});
	};

	handleOnClick = e => {
		const {writeFavoriteMusician, writeFavoriteNumber, changeStep} = this.props;
		const {favoriteMusician, favoriteNumber} = this.state;

		writeFavoriteMusician(favoriteMusician);
		writeFavoriteNumber(favoriteNumber);
		changeStep(3);

		this.setState({favoriteNumber: undefined, favoriteMusician: undefined});
	};

	render() {
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
							<option value="" />
							<option value="queen">Queen</option>
							<option value="ac/dc">AC/DC</option>
							<option value="the beatles">The Beatles</option>
							<option value="kiss">Kiss</option>
						</select>
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
