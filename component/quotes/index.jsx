import React, { Component } from 'react';
import {
	Form,
} from 'antd';
import PropTypes from 'prop-types';
import Footer from './Layout/Footer';
import SideBar from './Layout/SideBar';
import Reference from './Reference';
import Mode from './Mode';
// import Mode from '../Mode';
// import Reference from '../Weight&Volumne';
// import Reference from './Reference';
// import Reference from './Reference';
import { Container, Body } from './styles';


class Quotes extends Component {
	state = { };

	render() {
		const { form } = this.props;
		const { getFieldDecorator } = form;
		// const { type, showDetails } = this.state;
		return (
			<Container>
				<Form layout="vertical">
					<SideBar />
					<Body>
						<Reference getFieldDecorator={getFieldDecorator} />
						<Mode getFieldDecorator={getFieldDecorator} />
					</Body>
					<Footer />
				</Form>
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
