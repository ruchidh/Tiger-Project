import React, { Component } from 'react';
import { Form, Input } from 'antd';
import { Section, Title } from '../styles';

class Reference extends Component {
	state = {
	};

	render() {
		const { getFieldDecorator } = this.props;
		const formItemLayout = {
			wrapperCol: { span: 4 },
		  };
		return (
			<Section>
				<Title> NEW ENQUIRY</Title>
				<Form.Item {...formItemLayout}>
					{getFieldDecorator('name', {
						rules: [{ required: true, message: 'Name is Required' }],
					})(<Input placeholder="Please enter automation's name" />)}
				</Form.Item>

			</Section>
		);
	}
}

export default Reference;
