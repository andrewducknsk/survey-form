// Lib
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
// Components
import {SectionWrapper} from '../SectionWrapper/SectionWrapper';
import FavoriteColor from '../FavoriteColor/FavoriteColor.js';
// Func
import {
	writeFavoriteColor,
	changeStep,
	setLocalStorage,
} from '../../actions/index.js';
// Style
import './additional-information.scss';

export class AdditionalInformation extends PureComponent {
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
			<SectionWrapper
				sectionClass='additional-information'
				title='Дополнительная информация'
				titleClass='additional-information__title'
				form={true}
				formClass='additional-information__form'
				link='/thanks'
				linkText='Продолжить'
				onClickLink={this.handleOnClick}
			>
				<FavoriteColor
					colorValid={isFavoriteColorValid}
					colorError={favoriteColorValidError}
					onChange={this.handleOnChange}
				/>
			</SectionWrapper>
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
