import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import './select_musician.scss';

class SelectMusician extends PureComponent {
	render() {
		const {onChange, name} = this.props;

		return (
			<select
				className='select-musician__select'
				name={name}
				onChange={onChange}
				required
			>
				<option value=''>Выберите группу</option>
				<option value='Queen'>Queen</option>
				<option value='AC/DC'>AC/DC</option>
				<option value='The Beatles'>The Beatles</option>
				<option value='Kiss'>Kiss</option>
			</select>
		);
	}
}

export default SelectMusician;

SelectMusician.propTypes = {
	name: PropTypes.string.isRequired,
	onChange: PropTypes.func,
};
