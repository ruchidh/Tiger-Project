import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import {
	H2, Container, LoginBox, Header, SubContainer,
} from './styles';

class Login extends Component {
	renderLoginBox = type => (
		<LoginBox>
			<H2> {type} </H2>
			<Button type="primary">Save & Continue</Button>
		</LoginBox>
	)

	render() {
		return (
			<Container>
				<Header> Tiger Project </Header>
				<SubContainer>
					{this.renderLoginBox('Client')}
					{this.renderLoginBox('Vendor')}
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
