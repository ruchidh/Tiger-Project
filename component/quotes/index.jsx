import React, { Component } from 'react';
import {
	Form, Button as AntButton, Checkbox,
} from 'antd';
import PropTypes from 'prop-types';
import Footer from './Layout/Footer';
import SideBar from './Layout/SideBar';
import { Container } from './styles';


class Quotes extends Component {
	state = { type: 'Client', showDetails: false };

	render() {
		// const { type, showDetails } = this.state;
		return (
			<Container>
				<Form>  <SideBar /> <Footer />  </Form>
			</Container>
		);
	}
}

Quotes.propTypes = {
	query: PropTypes.shape({}),
};

Quotes.defaultProps = {
	query: null,
};

// const Button = styled(AntButton)`
// 	margin-top: 16px;
// 	margin-left: 16px;

// 	&:first-child {
// 		margin-left: 0;
// 	}
// `;


export default Form.create()(Quotes);
