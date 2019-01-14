// Lib
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
// Components
import {SectionWrapper} from '../SectionWrapper/SectionWrapper';
import {ValidError} from '../ValidError/ValidError';
import {InputText} from '../InputText/InputText';
// Func
import {
	writeName,
	writeSurname,
	changeStep,
	setLocalStorage,
} from '../../actions/index';
// Style
import './personal-information.scss';

export class PersonalInformation extends PureComponent {
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
			<SectionWrapper
				sectionClass='personal-information'
				titleClass='personal-information__title'
				title='Личная информация'
				form={true}
				formClass='personal-information__form'
				link='/important-information'
				linkText='Продолжить'
				onClickLink={this.handleOnClick}
			>
				<InputText
					name='name'
					placeholder='Имя'
					errorClass={isNameValid && isNameLengthValid}
					onChange={this.handleOnChange}
				/>
				{isNameValid ? null : <ValidError text={langValidError} />}
				{isNameLengthValid ? null : <ValidError text={lengthValidError} />}
				<InputText
					name='surname'
					placeholder='Фамилия'
					errorClass={isSurnameValid && isSurnameLengthValid}
					onChange={this.handleOnChange}
				/>
				{isSurnameValid ? null : <ValidError text={langValidError} />}
				{isSurnameLengthValid ? null : <ValidError text={lengthValidError} />}
			</SectionWrapper>
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
