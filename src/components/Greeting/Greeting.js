// Lib
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
// Components
import {SectionWrapper} from '../SectionWrapper/SectionWrapper';
// Func
import {changeStep, setLocalStorage} from '../../actions/index';
// Style
import './greeting.scss';

export class Greeting extends PureComponent {
	handleOnClick = e => {
		const {changeStep, setLocalStorage} = this.props;

		changeStep(`/personal-information`);
		setLocalStorage();
	};

	render() {
		return (
			<SectionWrapper
				sectionClass='greeting'
				title='Ответе на пару вопросов'
				titleClass='greeting__title'
				form={false}
				link='/personal-information'
				linkText='Начать'
				onClickLink={this.handleOnClick}
			/>
		);
	}
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
	changeStep,
	setLocalStorage,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Greeting);

Greeting.propTypes = {
	changeStep: PropTypes.func.isRequired,
	setLocalStorage: PropTypes.func.isRequired,
};
