import React, { Component } from 'react';
import {
	Form, Row, Col, Select, Input, Checkbox,
} from 'antd';
import { Section, Title } from '../styles';

const { Option } = Select;

class AddressServices extends Component {
	state = {};

	render() {
		const { getFieldDecorator } = this.props;
		const formItemLayout = {
			wrapperCol: { span: 24 },
		};
		return (
			<>
				<Section>
					<Title> ADDRESS {'&'} SERVICES </Title>
					<Row type="flex">
						<Col span={4}>
							<Form.Item label="Type">
								{getFieldDecorator('name', {
									rules: [{ required: true, message: 'Name is Required' }],
								})(
									<Select placeholder="Please select type">
										<Option value="export">Export</Option>
										<Option value="import">Import</Option>
									</Select>,
								)}
							</Form.Item>
						</Col>
						<Col span={4} style={{ margin: '0 20px' }}>
							<Form.Item label="Select Incoterm">
								{getFieldDecorator('name', {
									rules: [{ required: true, message: 'Name is Required' }],
								})(
									<Select placeholder="Please select a country">
										<Option value="china">China</Option>
										<Option value="usa">U.S.A</Option>
									</Select>,
								)}
							</Form.Item>
						</Col>
						<Col span={4}>
							<Form.Item label="Pick & Drop">
								{getFieldDecorator('name', {
									rules: [{ required: true, message: 'Name is Required' }],
								})(
									<Select placeholder="Please select a country">
										<Option value="china">China</Option>
										<Option value="usa">U.S.A</Option>
									</Select>,
								)}
							</Form.Item>
						</Col>
					</Row>
				</Section>
				<Section>
					<Title> Origin </Title>
					<Row>
						<Col span={10}>
							<Form.Item label="Origin Port">
								{getFieldDecorator('origin_port', {
									rules: [{ required: true, message: 'Name is Required' }],
								})(
									<Input placeholder="input placeholder" />,
								)}
							</Form.Item>
						</Col>
						<Col span={6} style={{ margin: '0 20px' }}>
							<Form.Item label="Origin Address">
								{getFieldDecorator('origin_address', {
									rules: [{ required: true, message: 'Name is Required' }],
								})(
									<Input placeholder="input placeholder" />,
								)}
							</Form.Item>
						</Col>
						<Col span={6}>
							<Form.Item label="Stuffing Location">
								{getFieldDecorator('stuffing_location', {
									rules: [{ required: true, message: 'Name is Required' }],
								})(
									<Select placeholder="Please select a country">
										<Option value="china">China</Option>
										<Option value="usa">U.S.A</Option>
									</Select>,
								)}
							</Form.Item>
						</Col>
					</Row>
				</Section>
				<Section>
					<Title> Destination </Title>
					<Row type="flex">
						<Col span={10}>
							<Form.Item label="Destination Port">
								{getFieldDecorator('destination_port', {
									rules: [{ required: true, message: 'Name is Required' }],
								})(
									<Input placeholder="input placeholder" />,
								)}
							</Form.Item>
						</Col>
						<Col span={6} style={{ margin: '0 20px' }}>
							<Form.Item label="Destination Address">
								{getFieldDecorator('destination_address', {
									rules: [{ required: true, message: 'Name is Required' }],
								})(
									<Input placeholder="input placeholder" />,
								)}
							</Form.Item>
						</Col>
						<Col span={6}>
							<Form.Item label="Stuffing Location">
								{getFieldDecorator('stuffing_location', {
									rules: [{ required: true, message: 'Name is Required' }],
								})(
									<Select placeholder="Please select a country">
										<Option value="china">China</Option>
										<Option value="usa">U.S.A</Option>
									</Select>,
								)}
							</Form.Item>
						</Col>
					</Row>
				</Section>
				<Section>
					<Title>Required Charges</Title>
					<Row>
						<Col span={4}>
						Origin:
						</Col>
						<Col span={16}>
							<Form.Item>
								{getFieldDecorator('checkbox-group', {
									  initialValue: ['A'],
								})(
									<Checkbox.Group style={{ width: '100%' }}>
										<Row>
											<Col span={6}><Checkbox value="A">Custom Clearance</Checkbox></Col>
											<Col span={6}><Checkbox value="C">Port</Checkbox></Col>
											<Col span={6}><Checkbox value="D">CFS/Custom Warehouse</Checkbox></Col>
										</Row>
									</Checkbox.Group>,
								)}
							</Form.Item>,
						</Col>
					</Row>
					<Row>
						<Col span={4}>
						Destination:
						</Col>
						<Col span={16}>
							<Form.Item>
								{getFieldDecorator('checkbox-group', {
									  initialValue: ['A'],
								})(
									<Checkbox.Group style={{ width: '100%' }}>
										<Row>
											<Col span={6}><Checkbox value="A">Custom Clearance</Checkbox></Col>
											<Col span={6}><Checkbox value="C">Port</Checkbox></Col>
											<Col span={6}><Checkbox value="D">CFS/Custom Warehouse</Checkbox></Col>
										</Row>
									</Checkbox.Group>,
								)}
							</Form.Item>,
						</Col>
					</Row>
				</Section>
		</>
		);
	}
}

export default AddressServices;
