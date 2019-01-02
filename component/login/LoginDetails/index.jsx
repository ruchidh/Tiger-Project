import React, { Component } from 'react';
import PropTypes from 'prop-types';


class LoginDetails extends Component {
	render() {
		const { type } = this.props;
		return (
			 <p> {type}</p>
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
