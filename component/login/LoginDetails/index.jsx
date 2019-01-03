import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Panel from 'common-util/plain-panel';

class LoginDetails extends Component {
	render() {
		const { type } = this.props;
		return (
			<Panel />
		);
	}
}

LoginDetails.propTypes = {
	type: PropTypes.string,
};

LoginDetails.defaultProps = {
	type: null,
};

export default LoginDetails;
