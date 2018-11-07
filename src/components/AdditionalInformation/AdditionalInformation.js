import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import '../../sass/AppRouter/additional-information/_additional-information.scss';
import '../../sass/AppRouter/additional-information//favorite-color/_favorite-color.scss';

class AdditionalInformation extends PureComponent {
	state = {
		favoriteColor: undefined,
	};

	handleOnChange = e => {
		const {value} = e.target;

		this.setState({favoriteColor: value});
	};

	handleOnClick = () => {};

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
							<span className="favorite-color__tile favorite-color__tile--one favorite-color__tile--check" />
							<input
								className="favorite-color__checkbox"
								type="checkbox"
								name="favoriteColor"
								value="red"
							/>
						</label>
						<label className="favorite-color__label">
							<span className="favorite-color__tile favorite-color__tile--two favorite-color__tile--check" />
							<input
								className="favorite-color__checkbox"
								type="checkbox"
								name="favoriteColor"
								value="orange"
							/>
						</label>
						<label className="favorite-color__label">
							<span className="favorite-color__tile favorite-color__tile--three favorite-color__tile--check" />
							<input
								className="favorite-color__checkbox"
								type="checkbox"
								name="favoriteColor"
								value="yellow"
							/>
						</label>
						<label className="favorite-color__label">
							<span className="favorite-color__tile favorite-color__tile--four favorite-color__tile--check" />
							<input
								className="favorite-color__checkbox"
								type="checkbox"
								name="favoriteColor"
								value="green"
							/>
						</label>
						<label className="favorite-color__label">
							<span className="favorite-color__tile favorite-color__tile--five favorite-color__tile--check" />
							<input
								className="favorite-color__checkbox"
								type="checkbox"
								name="favoriteColor"
								value="cyan"
							/>
						</label>
						<label className="favorite-color__label">
							<span className="favorite-color__tile favorite-color__tile--six favorite-color__tile--check" />
							<input
								className="favorite-color__checkbox"
								type="checkbox"
								name="favoriteColor"
								value="blue"
							/>
						</label>
						<label className="favorite-color__label">
							<span className="favorite-color__tile favorite-color__tile--seven favorite-color__tile--check" />
							<input
								className="favorite-color__checkbox"
								type="checkbox"
								name="favoriteColor"
								value="purple"
							/>
						</label>
						<label className="favorite-color__label">
							<span className="favorite-color__tile favorite-color__tile--eight favorite-color__tile--check" />
							<input
								className="favorite-color__checkbox"
								type="checkbox"
								name="favoriteColor"
								value="pink"
							/>
						</label>
						<label className="favorite-color__label">
							<span className="favorite-color__tile favorite-color__tile--nine favorite-color__tile--check" />
							<input
								className="favorite-color__checkbox"
								type="checkbox"
								name="favoriteColor"
								value="black"
							/>
						</label>
					</div>
					<button className="btn" onClick={this.handleOnClick}>
						Продолжить
					</button>
				</form>
			</section>
		);
	}
}

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AdditionalInformation);
