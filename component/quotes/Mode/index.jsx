import React, { Component } from 'react';
import {
	Form, Radio, Select, Row, Col, InputNumber, Input, Icon,
} from 'antd';
import { Section, Title } from '../styles';

const { Option } = Select;

const CONATINERS = ['20ft', '40ft HC', '40ft', '45ft', 'Flexitant', 'ISO Tank'];

class Mode extends Component {
	state = {};

	renderContainer = () => {
		const { getFieldDecorator } = this.props;
		return (CONATINERS || []).map((item, index) => (
			<Col span={4} key={index}>
				<Form.Item>
					{getFieldDecorator(item, {
						rules: [],
					})(
						<Input.Group compact>
							<InputNumber min={1} step={1} />
							<span
								className="ant-input-group-addon"
								style={{
									height: '32px',
									width: 'fit-content',
									lineHeight: '32px',
								}}
							>
								{item}
							</span>
						</Input.Group>,
					)}
				</Form.Item>
			</Col>
		));
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
									<Radio.Button value="a">
										<Icon type="home" /> <div> FCL </div>
									</Radio.Button>
									<Radio.Button value="b">
										<Icon type="home" /> <div> LCL </div>
									</Radio.Button>
									<Radio.Button value="c">
										<Icon type="home" /> <div> Air Cargo </div>
									</Radio.Button>
									<Radio.Button value="d">
										<Icon type="home" /> <div> Air Courier </div>
									</Radio.Button>
								</Radio.Group>,
							)}
						</Form.Item>
					</Col>
					<Col span={4}>
						<Form.Item label="Type">
							{getFieldDecorator('select', {
								rules: [{ required: true, message: 'Please select your country!' }],
							})(
								<Select placeholder="Please select a country">
									<Option value="china">China</Option>
									<Option value="usa">U.S.A</Option>
								</Select>,
							)}
						</Form.Item>
					</Col>
				</Row>
				<div className="ant-form-item-label"> Add Containers </div>
				<Row>{this.renderContainer()}</Row>
			</Section>
		);
	}
}

export default Mode;
