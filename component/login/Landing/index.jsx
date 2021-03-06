import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import LoginDetails from '../LoginDetails';
import {
	H2, Container, LoginBox, Header, SubContainer, LoginButton,
} from './styles';

class Login extends Component {
	state = { type: 'Client', showDetails: false };

	handleCheckLogin = (type) => {
		this.setState({ type, showDetails: true });
	};

	handleBack = () => {
		this.setState({ showDetails: false });
	};

	handleOtherLogin = () => {
		this.setState((prevState) => {
			const newType = prevState.type === 'Client' ? 'Vendor' : 'Client';
			return { type: newType };
		});
	};

	renderLoginBox = type => (
		<LoginBox>
			<H2> {type} </H2>
			<LoginButton>
				<Button type="primary" onClick={() => this.handleCheckLogin(type)} size="large">
					LOGIN
				</Button>
			</LoginButton>
		</LoginBox>
	);

	render() {
		const { type, showDetails } = this.state;
		return (
			<Container>
				<Header> Tiger Project </Header>
				<SubContainer>
					{!showDetails ? (
						<>
							{this.renderLoginBox('Client')}
							{this.renderLoginBox('Vendor')}
						</>
					) : (
						<LoginDetails
							type={type}
							handleBack={this.handleBack}
							handleOtherLogin={this.handleOtherLogin}
						/>
					)}
				</SubContainer>
			</Container>
		);
	}
}

Login.propTypes = {
	query: PropTypes.shape({}),
};

Login.defaultProps = {
	query: null,
};

export default Login;
