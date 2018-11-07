import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import '../../sass/AppRouter/personal-information/_personal-information.scss';

class PersonalInformation extends PureComponent {
	state = {
		name: undefined,
		surname: undefined,
	};

	handleOnChange = e => {
		const {value, name} = e.target;

		this.setState({[name]: value});
	};

	handleOnClick = () => {};

	render() {
		return (
			<section className="personal-information">
				<h2 className="personal-information__title">Личная информация</h2>
				<form className="personal-information__form">
					<input
						className="personal-information__field"
						type="text"
						name="name"
						minLength="2"
						pattern="^[А-Яа-яЁё\s]+$"
						placeholder="Имя"
						required
						onChange={this.handleOnChange}
					/>
					<input
						className="personal-information__field"
						type="text"
						name="surname"
						minLength="2"
						pattern="^[А-Яа-яЁё\s]+$"
						placeholder="Фамилия"
						required
						onChange={this.handleOnChange}
					/>
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
)(PersonalInformation);
