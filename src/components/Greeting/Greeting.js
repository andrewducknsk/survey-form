// Lib
import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
// Func
import {changeStep, setLocalStorage} from '../../actions/index';
// Style
import '../../sass/AppRouter/greeting/_greeting.scss';

class Greeting extends PureComponent {
	handleOnClick = e => {
		const {changeStep, setLocalStorage} = this.props;

		changeStep(`/personal-information`);
		setLocalStorage();
	};

	render() {
		return (
			<section className='greeting'>
				<h1 className='greeting__title'>Ответе на пару вопросов</h1>
				<Link
					className='btn'
					to='/personal-information'
					onClick={this.handleOnClick}
				>
					Начать
				</Link>
			</section>
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
