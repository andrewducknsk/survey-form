// Lib
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
// Components
import {SectionWrapper} from '../SectionWrapper/SectionWrapper';
import FavoriteNumber from '../FavoriteNumber/FavoriteNumber';
import FavoriteMusician from '../FavoriteMusician/FavoriteMusician';
// Func
import {
	writeFavoriteMusician,
	writeFavoriteNumber,
	changeStep,
	setLocalStorage,
} from '../../actions/index';
// Style
import './important-information.scss';

export class ImportantInformation extends PureComponent {
	state = {
		favoriteNumber: undefined,
		isFavoriteNumberValid: true,
		favoriteNumberValidError: 'Выберите любимое число',
		favoriteMusician: undefined,
		isFavoriteMusicianValid: true,
		favoriteMusicianValidError: 'Выберите любимую группу',
	};

	handleOnChange = e => {
		const {value, name} = e.target;

		this.setState({[name]: value});
	};

	handleOnClick = e => {
		const {
			writeFavoriteMusician,
			writeFavoriteNumber,
			changeStep,
			setLocalStorage,
		} = this.props;
		const {favoriteMusician, favoriteNumber} = this.state;

		if (
			this.favoriteNumberValid(favoriteNumber) &&
			this.favoriteMusicianValid(favoriteMusician)
		) {
			writeFavoriteMusician(favoriteMusician);
			writeFavoriteNumber(favoriteNumber);
			changeStep('/additional-information');
			setLocalStorage();

			this.setState({favoriteNumber: undefined, favoriteMusician: undefined});
		} else {
			e.preventDefault();
		}
	};

	favoriteNumberValid = number => {
		if (number !== undefined && number !== '') {
			this.setState({isFavoriteNumberValid: true});

			return true;
		} else {
			this.setState({isFavoriteNumberValid: false});

			return false;
		}
	};

	favoriteMusicianValid = musician => {
		if (musician !== undefined && musician !== '') {
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
			<SectionWrapper
				sectionClass='important-information'
				title='Очень важная информация'
				titleClass='important-information__title'
				form={true}
				formClass='important-information__form'
				link='/additional-information'
				linkText='Продолжить'
				onClickLink={this.handleOnClick}
			>
				<FavoriteNumber
					numberValid={isFavoriteNumberValid}
					numberError={favoriteNumberValidError}
					onChange={this.handleOnChange}
				/>
				<FavoriteMusician
					musicianValid={isFavoriteMusicianValid}
					musicianError={favoriteMusicianValidError}
					onChange={this.handleOnChange}
				/>
			</SectionWrapper>
		);
	}
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
	writeFavoriteNumber,
	writeFavoriteMusician,
	changeStep,
	setLocalStorage,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ImportantInformation);

ImportantInformation.propTypes = {
	writeFavoriteNumber: PropTypes.func.isRequired,
	writeFavoriteMusician: PropTypes.func.isRequired,
	changeStep: PropTypes.func.isRequired,
	setLocalStorage: PropTypes.func.isRequired,
};
