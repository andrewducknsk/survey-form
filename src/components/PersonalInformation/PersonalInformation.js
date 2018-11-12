// Lib
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
// Func
import {
	writeName,
	writeSurname,
	changeStep,
	setLocalStorage,
} from '../../actions/index';
// Style
import '../../sass/AppRouter/personal-information/_personal-information.scss';

class PersonalInformation extends PureComponent {
	state = {
		name: undefined,
		surname: undefined,
		isNameValid: true,
		isSurnameValid: true,
		isNameLengthValid: true,
		isSurnameLengthValid: true,
		langValidError: `Введите русскими буквами`,
		lengthValidError: `Не менее 2-х символов`,
	};

	regexpValid = value => /^[А-Яа-яЁё\s]+$/i.test(value);

	nameValid = name => {
		if (name !== undefined && name.length >= 2) {
			this.setState({isNameLengthValid: true});

			if (this.regexpValid(name)) {
				this.setState({isNameValid: true});

				return true;
			} else {
				this.setState({isNameValid: false});

				return false;
			}
		} else {
			this.setState({isNameLengthValid: false});

			return false;
		}
	};

	surnameValid = surname => {
		if (surname !== undefined && surname.length >= 2) {
			this.setState({isSurnameLengthValid: true});

			if (this.regexpValid(surname)) {
				this.setState({isSurnameValid: true});

				return true;
			} else {
				this.setState({isSurnameValid: false});

				return false;
			}
		} else {
			this.setState({isSurnameLengthValid: false});

			return false;
		}
	};

	handleOnChange = e => {
		const {value, name} = e.target;

		this.setState({[name]: value.trim()});
	};

	handleOnClick = e => {
		const {writeName, writeSurname, changeStep, setLocalStorage} = this.props;
		const {name, surname} = this.state;

		if (this.nameValid(name) && this.surnameValid(surname)) {
			writeName(name);
			writeSurname(surname);
			changeStep(`/important-information`);
			setLocalStorage();

			this.setState({
				name: undefined,
				surname: undefined,
				redirect: true,
			});
		} else {
			e.preventDefault();
		}
	};

	render() {
		const {
			isNameValid,
			isSurnameValid,
			isNameLengthValid,
			isSurnameLengthValid,
			langValidError,
			lengthValidError,
		} = this.state;

		return (
			<section className='personal-information'>
				<h2 className='personal-information__title'>Личная информация</h2>
				<form
					className='personal-information__form'
					name='personal-information'
				>
					<input
						className={`personal-information__field ${
							isNameValid || isNameLengthValid
								? null
								: 'personal-information__field--error'
						}`}
						type='text'
						name='name'
						placeholder='Имя'
						onChange={this.handleOnChange}
					/>
					{isNameValid ? null : (
						<p className='personal-information__error'>{langValidError}</p>
					)}
					{isNameLengthValid ? null : (
						<p className='personal-information__error'>{lengthValidError}</p>
					)}
					<input
						className={`personal-information__field ${
							isSurnameValid || isSurnameLengthValid
								? null
								: 'personal-information__field--error'
						}`}
						type='text'
						name='surname'
						placeholder='Фамилия'
						onChange={this.handleOnChange}
					/>
					{isSurnameValid ? null : (
						<p className='personal-information__error'>{langValidError}</p>
					)}
					{isSurnameLengthValid ? null : (
						<p className='personal-information__error'>{lengthValidError}</p>
					)}
					<Link
						to='/important-information'
						className='btn'
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
	setLocalStorage,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PersonalInformation);

PersonalInformation.propTypes = {
	writeName: PropTypes.func.isRequired,
	writeSurname: PropTypes.func.isRequired,
	changeStep: PropTypes.func.isRequired,
	setLocalStorage: PropTypes.func.isRequired,
};
