// Lib
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
// Func
import {resetStore, clearLocalStorage} from '../../actions';
import {templateStorage} from '../../localStorage';
// Style
import '../../sass/AppRouter/thanks/_thanks.scss';

class Thanks extends PureComponent {
	handleOnClick = () => {
		const {clearLocalStorage, resetStore} = this.props;

		clearLocalStorage();
		resetStore(templateStorage.FORM);
	};

	render() {
		return (
			<section className='thanks'>
				<h2 className='thanks__title'>Благодарим за ответы!</h2>
				<Link to='/' className='btn btn--thanks' onClick={this.handleOnClick}>
					Пожалуйста
				</Link>
			</section>
		);
	}
}

const mapStateToProps = () => ({});

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
