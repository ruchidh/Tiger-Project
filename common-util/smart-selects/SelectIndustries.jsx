import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import industries from 'util/constants/industries.json';
import ControlSelect from '../form/ControlSelect';

class SelectIndustries extends Component {
	componentDidMount() {}

	render() {
		const { value, ...rest } = this.props;
		return (
			<ControlSelect
				placeholder="Select Industries"
				{...rest}
				value={value || undefined}
				options={industries}
			/>
		);
	}
}

SelectIndustries.propTypes = {

};

export default SelectIndustries;
