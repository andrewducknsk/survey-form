// Lib
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
// Func
import {resetStore, clearLocalStorage} from '../../actions';
import {templateStorage} from '../../localStorage';
import {getAllForm} from '../../reducers/index';
// Style
import '../../sass/AppRouter/thanks/_thanks.scss';

class Thanks extends PureComponent {
	componentDidMount() {
		const {form} = this.props;

		this.postForm(form);
		console.log(form);
	}

	postForm = data => {
		fetch(`https://server-nodejs.netlify.com/api/poll-form/info`, {
			method: 'POST',
			body: JSON.stringify(data),
			mode: 'cors',
			headers: {'Content-Type': 'application/json'},
		});
	};

	handleOnClick = () => {
		const {clearLocalStorage, resetStore} = this.props;

		clearLocalStorage();
		resetStore(templateStorage);
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
