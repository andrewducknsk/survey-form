import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import PersonalInformation from '../PersonalInformation/PersonalInformation';
import ImportantInformation from '../ImportantInformation/ImportantInformation';
import AdditionalInformation from '../AdditionalInformation/AdditionalInformation';
import Thanks from '../Thanks/Thanks';
import '../../sass/AppRouter/_app-router.scss';

class AppRouter extends Component {
	render() {
		return (
			<React.Fragment>
				<Switch>
					<Route
						exact
						path="/personal-information"
						component={PersonalInformation}
					/>
					<Route
						path="/important-information"
						component={ImportantInformation}
					/>
					<Route
						path="/additional-information"
						component={AdditionalInformation}
					/>
					<Route path="/thanks" component={Thanks} />
					<Redirect to="/personal-information" />
				</Switch>
			</React.Fragment>
		);
	}
}

export default AppRouter;
