// Lib
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
// Components
import {SectionWrapper} from '../SectionWrapper/SectionWrapper';
// Func
import {resetStore, clearLocalStorage} from '../../actions';
import {templateStorage} from '../../localStorage';
import {getAllForm} from '../../reducers/index';
import {sendingData} from '../../api';
// Style
import './thanks.scss';

export class Thanks extends PureComponent {
	componentDidMount() {
		const {form} = this.props;

		sendingData(form);
	}

	handleOnClick = () => {
		const {clearLocalStorage, resetStore} = this.props;
		clearLocalStorage();
		resetStore(templateStorage);
	};

	render() {
		return (
			<SectionWrapper
				sectionClass='thanks'
				title='Благодарим за ответы!'
				titleClass='thanks__title'
				form={false}
				link='/'
				linkText='Пожалуйста'
				onClickLink={this.handleOnClick}
			/>
		);
	}
}

const mapStateToProps = state => ({
	form: getAllForm(state),
});

const mapDispatchToProps = {
	resetStore,
	clearLocalStorage,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Thanks);

Thanks.propTypes = {
	resetStore: PropTypes.func.isRequired,
	clearLocalStorage: PropTypes.func.isRequired,
};
