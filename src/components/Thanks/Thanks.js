import React, {PureComponent} from 'react';
import {connect} from 'react-redux';

class Thanks extends PureComponent {
	handleOnClick = () => {
		window.open(``, `_self`, ``);
		window.close();
	};

	render() {
		return (
			<section className="thanks">
				<button className="btn btn--thanks" onClick={this.handleOnClick}>
					Пожалуйста
				</button>
			</section>
		);
	}
}

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Thanks);
