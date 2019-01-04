import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DataForm from 'common-util/form/DataForm';
import { Icon } from 'antd';
import {
	Panel, Info, H2, Footer,
} from './styles';

class LoginDetails extends Component {
	state = { password: false };

	handlePassword = () => {
		this.setState({ password: true });
	};

	handlePasswordSubmit = () => {

	}

	handleSubmit = () => {

	}

	renderPassword = () => {
		const controls = [
			{
				type: 'select',
				label: 'User Type',
				name: 'user_type',
				options: [
					{
						value: 'Shipper',
						label: 'VENDOR',
					},
					{
						value: 'FreightForwarder',
						label: 'CLIENT',
					},
				],
				placeholder: 'Select user type....',
				rules: [{ required: true, message: 'User Type is required' }],
			},
			{
				type: 'input',
				inputType: 'password',
				label: 'Password',
				name: 'password',
				prefix: <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />,
				placeholder: 'Enter your password',
				rules: [{ required: true, message: 'Password is required' }],
			},
			{
				type: 'input',
				inputType: 'text',
				label: 'Captcha',
				name: 'captcha',
				placeholder: 'Enter your captcha',
				rules: [{ required: true, message: 'Captcha is required' }],
			},
		];
		return (
			<>
				<H2> Recover Account </H2>
				<DataForm
					style={{ padding: '16px 0px' }}
					submitText="SUBMIT"
					controls={controls}
					onSubmit={v => this.handlePasswordSubmit(v)}
					buttonsize="large"
					values={{}}
					block
				/>
			</>
		);
	};

	render() {
		const { type, handleBack, handleOtherLogin } = this.props;
		const { password } = this.state;
		const controls = [
			{
				type: 'input',
				inputType: 'email',
				label: 'Email',
				name: 'email',
				placeholder: 'Enter your email',
				// prefix: <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />,
				rules: [
					{ required: true, message: 'Email id is required' },
					{
						type: 'email',
						message: 'The input is not valid E-mail!',
					},
				],
			},
			{
				type: 'input',
				inputType: 'password',
				label: 'password',
				name: 'password',
				prefix: <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />,
				placeholder: 'Enter your password',
				rules: [{ required: true, message: 'Password is required' }],
			},
		];

		return (
			<Panel>
				{!password ? (
					<>
						<H2> {type} Login </H2>
						<DataForm
							style={{ padding: '16px 0px' }}
							submitText="LOGIN"
							controls={controls}
							onSubmit={v => this.handleSubmit(v)}
							buttonsize="large"
							values={{}}
							block
						/>
						<div>
							Please
							<Info href="#" onClick={handleBack}>
								{' '}Contact Us{' '}
							</Info>
							if you would like to join Tiger.
						</div>
						<Footer>
							<Info href="#" onClick={this.handlePassword}>
								Forgot Password ?
							</Info>
							<div>
								<Info href="#" onClick={handleOtherLogin}>
									{' '}Click here{' '}
								</Info>
								to login as a {type}
							</div>
						</Footer>
					</>
				) : (
					this.renderPassword()
				)}
			</Panel>
		);
	}
}

LoginDetails.propTypes = {
	type: PropTypes.string.isRequired,
	handleBack: PropTypes.func,
	handleOtherLogin: PropTypes.func,
};

LoginDetails.defaultProps = {
	handleBack: () => {},
	handleOtherLogin: () => {},
};

export default LoginDetails;
