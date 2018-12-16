// Lib
import React, {Component} from 'react';
import {Route, Switch, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
// Components
import Greeting from '../Greeting/Greeting';
import PersonalInformation from '../PersonalInformation/PersonalInformation';
import ImportantInformation from '../ImportantInformation/ImportantInformation';
import AdditionalInformation from '../AdditionalInformation/AdditionalInformation';
import Thanks from '../Thanks/Thanks';
// Func
import {getStep} from '../../reducers/index';
import {checkLocalStorage} from '../../actions/index';
// Style
import '../../sass/AppRouter/_app-router.scss';

class AppRouter extends Component {
	componentDidMount() {
		const {checkLocalStorage} = this.props;

		checkLocalStorage();
	}

	render() {
		const {step} = this.props;

		if (step === '/') {
			return <Route exact path='/' component={Greeting} />;
		} else {
			return (
				<React.Fragment>
					<Switch>
						<Route
							exact
							path='/personal-information'
							component={PersonalInformation}
						/>
						<Route
							exact
							path='/important-information'
							component={ImportantInformation}
						/>
						<Route
							exact
							path='/additional-information'
							component={AdditionalInformation}
						/>
						<Route exact path='/thanks' component={Thanks} />
						<Redirect to={step} />
					</Switch>
				</React.Fragment>
			);
		}
	}
}

const mapStateToProps = state => ({
	step: getStep(state),
});

const mapDispatchToProps = {
	checkLocalStorage,
};

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(AppRouter)
);

AppRouter.propTypes = {
	step: PropTypes.string.isRequired,
};
