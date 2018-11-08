import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {writeName, writeSurname, changeStep} from '../../actions/index';
import '../../sass/AppRouter/personal-information/_personal-information.scss';
class PersonalInformation extends PureComponent {
	state = {
		name: undefined,
		surname: undefined,
	};

	handleOnChange = e => {
		const {value, name} = e.target;

		this.setState({[name]: value.trim()});
	};

	handleOnClick = e => {
		const {writeName, writeSurname, changeStep} = this.props;
		const {name, surname} = this.state;

		if (name === undefined || surname === undefined) {
			e.preventDefault();
		} else {
			writeName(name);
			writeSurname(surname);
			changeStep(2);

			this.setState({name: undefined, surname: undefined});
		}
	};

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
					<Link
						to="/important-information"
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
	writeName,
	writeSurname,
	changeStep,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PersonalInformation);
