import React, {PureComponent} from 'react';
// import {} from 'rea':
import PersonalInformation from '../PersonalInformation/PersonalInformation';
import ImportantInformation from '../ImportantInformation/ImportantInformation';
import AdditionalInformation from '../AdditionalInformation/AdditionalInformation';
import Thanks from '../Thanks/Thanks';
import '../../sass/AppRouter/_app-router.scss';

class AppRouter extends PureComponent {
	render() {
		return (
			<React.Fragment>
				<PersonalInformation />
				<ImportantInformation />
				<AdditionalInformation />
				<Thanks />
			</React.Fragment>
		);
	}
}

export default AppRouter;
