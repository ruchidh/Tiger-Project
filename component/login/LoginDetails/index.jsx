import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DataForm from 'common-util/form/DataForm';
import { Panel, Info, H2 } from './styles';

class LoginDetails extends Component {
	state ={ details: true }

	render() {
		const { type } = this.props;
		const controls = [
			{
				type: 'input',
				inputType: 'text',
				label: 'Name',
				name: 'name',
				placeholder: 'Enter your name',
				rules: [{ required: true, message: 'Name is required' }],
			},
			{
				type: 'input',
				inputType: 'text',
				label: 'Password',
				name: 'password',
				placeholder: 'Enter your password',
				rules: [{ required: true, message: 'Password is required' }],
			},
		];

		return (
			<Panel>
				<H2> {type}</H2>
				<DataForm
					// style={{ padding: 32 }}
					submitText="LOGIN"
					controls={controls}
					onSubmit={v => this.handleSubmit(v)}
					values={{}}
				/>
				<Info> Please contact us if you would like to join cogo. </Info>
				<Info> Forgot Password ? </Info>
			</Panel>
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
