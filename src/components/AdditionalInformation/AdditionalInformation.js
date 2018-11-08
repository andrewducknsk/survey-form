import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {writeFavoriteColor, changeStep} from '../../actions/index.js';
import '../../sass/AppRouter/additional-information/_additional-information.scss';
import '../../sass/AppRouter/additional-information//favorite-color/_favorite-color.scss';

class AdditionalInformation extends PureComponent {
	state = {
		favoriteColor: [],
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
		const {writeFavoriteColor, changeStep} = this.props;
		const {favoriteColor} = this.state;

		writeFavoriteColor(favoriteColor);
		changeStep(4);

		this.setState({favoriteColor: []});
	};

	render() {
		return (
			<section className="additional-information">
				<h2 className="additional-information__title">
					Дополнительная информация
				</h2>
				<form className="additional-information__form">
					<div className="favorite-color" onChange={this.handleOnChange}>
						<h3 className="favorite-color__title">Любимый цвет</h3>
						<label className="favorite-color__label">
							<input
								className="favorite-color__checkbox"
								type="checkbox"
								name="favoriteColor"
								value="red"
							/>
							<span className="favorite-color__tile favorite-color__tile--one" />
						</label>
						<label className="favorite-color__label">
							<input
								className="favorite-color__checkbox"
								type="checkbox"
								name="favoriteColor"
								value="orange"
							/>
							<span className="favorite-color__tile favorite-color__tile--two" />
						</label>
						<label className="favorite-color__label">
							<input
								className="favorite-color__checkbox"
								type="checkbox"
								name="favoriteColor"
								value="yellow"
							/>
							<span className="favorite-color__tile favorite-color__tile--three" />
						</label>
						<label className="favorite-color__label">
							<input
								className="favorite-color__checkbox"
								type="checkbox"
								name="favoriteColor"
								value="green"
							/>
							<span className="favorite-color__tile favorite-color__tile--four" />
						</label>
						<label className="favorite-color__label">
							<input
								className="favorite-color__checkbox"
								type="checkbox"
								name="favoriteColor"
								value="cyan"
							/>
							<span className="favorite-color__tile favorite-color__tile--five" />
						</label>
						<label className="favorite-color__label">
							<input
								className="favorite-color__checkbox"
								type="checkbox"
								name="favoriteColor"
								value="blue"
							/>
							<span className="favorite-color__tile favorite-color__tile--six" />
						</label>
						<label className="favorite-color__label">
							<input
								className="favorite-color__checkbox"
								type="checkbox"
								name="favoriteColor"
								value="purple"
							/>
							<span className="favorite-color__tile favorite-color__tile--seven" />
						</label>
						<label className="favorite-color__label">
							<input
								className="favorite-color__checkbox"
								type="checkbox"
								name="favoriteColor"
								value="pink"
							/>
							<span className="favorite-color__tile favorite-color__tile--eight" />
						</label>
						<label className="favorite-color__label">
							<input
								className="favorite-color__checkbox"
								type="checkbox"
								name="favoriteColor"
								value="black"
							/>
							<span className="favorite-color__tile favorite-color__tile--nine" />
						</label>
					</div>
					<Link to="/thanks" className="btn" onClick={this.handleOnClick}>
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
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AdditionalInformation);
