import React, { Component } from 'react';
import {
	Form, Radio, Select, Row, Col, InputNumber, Input,
} from 'antd';
import { Section, Title } from '../styles';

const { Option } = Select;

class Mode extends Component {
	state = {
	};

	render() {
		const { getFieldDecorator } = this.props;
		return (
			<Section>
				<Title> MODE</Title>
				<Row>
					<Col span={8}>
						<Form.Item>
							{getFieldDecorator('radio-button')(
								<Radio.Group>
									<Radio.Button value="a">FCL</Radio.Button>
									<Radio.Button value="b">LCL</Radio.Button>
									<Radio.Button value="c">Air Cargo</Radio.Button>
									<Radio.Button value="d">Air Courier</Radio.Button>
								</Radio.Group>,
							)}
						</Form.Item>
					</Col>
					<Col span={4}>
						<Form.Item
							label="Type"
						>
							{getFieldDecorator('select', {
								rules: [
									{ required: true, message: 'Please select your country!' },
								],
							})(
								<Select placeholder="Please select a country">
									<Option value="china">China</Option>
									<Option value="usa">U.S.A</Option>
								</Select>,
							)}
						</Form.Item>
					</Col>
				</Row>
				<Row>
					<Col span={4}>

						<Form.Item>
							{getFieldDecorator('20ft', {
								rules: [{ required: true, message: 'Please input your phone number!' }],
							})(
								<Input.Group compact>
									<InputNumber min={1} /> <span className="ant-input-group-addon" style={{ height: '32px', width: '50px', lineHeight: '32px' }}> 20ft</span>
								</Input.Group>,
							)}
						</Form.Item>
					</Col>
					<Col span={4}>
						<Form.Item>
							{getFieldDecorator('20ft', {
								rules: [{ required: true, message: 'Please input your phone number!' }],
							})(
								<Input addonAfter="20Ft" style={{ width: '100%' }} />,
							)}
						</Form.Item>
					</Col>
					<Col span={4}>
						<Form.Item>
							{getFieldDecorator('20ft', {
								rules: [{ required: true, message: 'Please input your phone number!' }],
							})(
								<Input addonAfter="20Ft" style={{ width: '100%' }} />,
							)}
						</Form.Item>
					</Col>
					{/* <Col span={4}>
						<Form.Item>
							{getFieldDecorator('20ft', {
								rules: [{ required: true, message: 'Please input your phone number!' }],
							})(
								<Input addonAfter="20Ft" style={{ width: '100%' }} />,
							)}
						</Form.Item>
					</Col>
					<Col span={4}>
						<Form.Item>
							{getFieldDecorator('20ft', {
								rules: [{ required: true, message: 'Please input your phone number!' }],
							})(
								<Input addonAfter="20Ft" style={{ width: '100%' }} />,
							)}
						</Form.Item>
					</Col>
					<Col span={4}>
						<Form.Item>
							{getFieldDecorator('20ft', {
								rules: [{ required: true, message: 'Please input your phone number!' }],
							})(
								<Input addonAfter="20Ft" style={{ width: '100%' }} />,
							)}
						</Form.Item> */}
					{/* </Col> */}
				</Row>
			</Section>
		);
	}
}

export default Mode;
