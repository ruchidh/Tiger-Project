import React, { Component } from 'react';
import styled from 'styled-components';

import PropTypes from 'prop-types';
import { Form, Icon, Button } from 'antd';
import mapValues from 'lodash/mapValues';

import FormControl from './FormControl';

const colors = [{ icon: '#88b263', border: '#d5e0cc' }];

class DataForm extends Component {
	constructor(props) {
		super(props);

		let colorIndex = Math.floor(Math.random() * colors.length);

		if (colorIndex < 0) {
			colorIndex = 0;
		} else if (colorIndex >= colors.length) {
			colorIndex = colors.length - 1;
		}

		this.state = {
			active_filter: undefined,
			editing: false,
			colorIndex: 0,
		};
	}

	onSubmit = (e) => {
		e.preventDefault();

		const { form, onSubmit } = this.props;
		form.validateFields((err, vals) => {
			if (!err) onSubmit(vals);
		});
	};

	onClickEdit = () => {
		this.setState({ editing: true });
	};

	applyFilter = active_filter => this.setState({ active_filter });

	clearFilter = (filterName) => {
		const { form } = this.props;

		this.setState(
			prevState => ({
				active_filter: prevState.active_filter === filterName ? undefined : prevState.active_filter,
			}),
			() => form.setFieldsValue({ [filterName]: undefined }),
		);
	};

	clearAllFilters = () => {
		const { form, controls } = this.props;
		const values = {};

		controls.forEach((control) => {
			values[control.name] = undefined;
		});

		this.setState({ active_filter: undefined }, () => {
			form.setFieldsValue({ ...values });
		});
	};

	renderNormalFilters = () => {
		const {
			controls,
			form,
			loading,
			layout,
			showSubmit,
			submitText,
			formType,
			editMode,
			values,
		} = this.props;
		const { editing } = this.state;
		const formItemLayout =			layout === 'horizontal' ? { labelCol: { span: 4 }, wrapperCol: { span: 10 } } : null;

		return controls.length > 0 ? (
			<>
				{controls.map((control) => {
					const {
						name,
						rules,
						label,
						value,
						initialValue,
						type,
						show = true,
						...controlProps
					} = control;

					if (!show) {
						return null;
					}

					if (editMode && !editing) {
						return (
							<FormItemContainer key={name}>
								<FormLabel>{label}</FormLabel>
								{values && values[name] ? values[name] : initialValue}
							</FormItemContainer>
						);
					}

					const decoratorOptions = { rules, initialValue };

					if (type === 'checkbox') {
						decoratorOptions.valuePropName = 'checked';
					}

					return (
						<Form.Item key={name} label={label} {...formItemLayout} style={{ padding: 0 }}>
							{form.getFieldDecorator(name, decoratorOptions)(
								<FormControl type={type} {...controlProps} />,
							)}
						</Form.Item>
					);
				})}

				{showSubmit && (
					<ActionContainer className={formType}>
						{editMode && !editing ? (
							<Button loading={loading} onClick={this.onClickEdit}>
								Edit
							</Button>
						) : null}
						{!editMode || (editMode && editing) ? (
							<Button loading={loading} type="primary" htmlType="submit">
								{submitText || 'Submit'}
							</Button>
						) : null}
					</ActionContainer>
				)}
			</>
		) : null;
	};

	renderAppliedFilters = () => {
		const {
			form,
			controls,
			values,
			loading,
			layout,
			showSubmit,
			submitText,
			formType,
		} = this.props;
		const { active_filter } = this.state;
		const appliedControls = controls.filter(
			control => (values || [])[control.name] || control.name === active_filter,
		);
		const formItemLayout =			layout === 'horizontal' ? { labelCol: { span: 4 }, wrapperCol: { span: 10 } } : null;
		return appliedControls.length > 0 ? (
			<>
				<Row className="applied">
					<Text>Applied Filters</Text>
					<ClearButton onClick={this.clearAllFilters}>Clear</ClearButton>
				</Row>
				{appliedControls.map((control) => {
					const {
						name,
						rules,
						label,
						value,
						initialValue,
						type,
						show = true,
						...controlProps
					} = control;
					if (!show) {
						return null;
					}
					const decoratorOptions = { rules, initialValue };
					if (type === 'checkbox') {
						decoratorOptions.valuePropName = 'checked';
					}
					const labelNode = (
						<Label className="applied">
							{label}
							<Icon
								type="close-circle"
								theme="filled"
								style={{ color: '#FCB922', cursor: 'pointer' }}
								onClick={() => this.clearFilter(name)}
							/>
						</Label>
					);
					return (
						<Form.Item key={name} label={labelNode} {...formItemLayout} style={{ padding: 0 }}>
							{form.getFieldDecorator(name, decoratorOptions)(
								<FormControl type={type} {...controlProps} autoFocus />,
							)}
						</Form.Item>
					);
				})}
				{showSubmit && (
					<ActionContainer className={formType}>
						<Button loading={loading} type="primary" htmlType="submit">
							{submitText || 'Submit'}
						</Button>
					</ActionContainer>
				)}
			</>
		) : null;
	};

	renderAvailableFilters = () => {
		const { controls, values } = this.props;

		const { active_filter } = this.state;
		const availableControls = controls.filter(
			control => !(values || [])[control.name] && control.name !== active_filter,
		);

		return (
			<>
				{availableControls.length !== controls.length && availableControls.length !== 0 && (
					<Text>Available Filters</Text>
				)}
				{availableControls.map((control) => {
					const { colorIndex } = this.state;
					return control.show !== false ? (
						<Label
							key={`label_${control.name}`}
							borderColor={(colors[colorIndex] || {}).border}
							onClick={() => this.applyFilter(control.name)}
						>
							{control.label}
							<Icon
								type="plus-circle"
								theme="filled"
								style={{ color: (colors[colorIndex] || {}).icon, marginLeft: 10 }}
							/>
						</Label>
					) : null;
				})}
			</>
		);
	};

	withRow = (node) => {
		const { layout } = this.props;
		return layout === 'row' ? <Row className="equal">{node}</Row> : node;
	};

	render() {
		const {
			layout,
			heading,
			headingRight,
			submitText,
			showSubmit,
			form,
			filterType,
			onChange,
			editMode,
			debounceTime,
			loading,
			...rest
		} = this.props;
		return (
			<Form {...rest} layout={layout} onSubmit={this.onSubmit}>
				{heading && (
					<Row>
						<h3>{heading}</h3>
						{headingRight || ''}
					</Row>
				)}
				{this.withRow(
					filterType === 'collapse' ? (
						<>
							{this.renderAppliedFilters()}
							{this.renderAvailableFilters()}
						</>
					) : (
						this.renderNormalFilters()
					),
				)}
			</Form>
		);
	}
}

const Row = styled.div`
	display: flex;
	justify-content: space-between;

	&.equal {
		flex-wrap: wrap;

		& > * {
			flex: 1;
			margin: 0px 8px;
		}
	}
`;

const ActionContainer = styled.div`
	width: 100%;
	text-align: right;
	margin-bottom: 25px;
`;

const ClearButton = styled.div`
	color: rgb(27, 139, 232);
	letter-spacing: -0.02px;
	text-align: right;
	cursor: pointer;
	text-decoration: underline;
`;

const Label = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 6px 15px;
	margin: 8px 0px;
	background-color: #f8f8f8;
	border: ${({ borderColor = '#d8d8d8' }) => `1px solid ${borderColor}`};
	border-radius: 4px;
	user-select: none;
	cursor: pointer;
	transition: 0.1s all linear;
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);

	&.applied {
		padding: 4px;
		margin: 0px;
		background-color: transparent;
		border: none;
		cursor: auto;
		box-shadow: none;

		&:hover {
			background-color: #f8f8f8;
			background-color: transparent;
		}
	}

	&:hover {
		background-color: #eee;
	}
`;

const Text = styled.div`
	font-size: 14px;
	color: rgb(155, 155, 155);
	margin-bottom: 12px;
`;

const FormLabel = styled.p`
	font-weight: 700;
	margin-bottom: 8px;
`;

const FormItemContainer = styled.div`
	margin-bottom: 16px;
`;

DataForm.propTypes = {
	form: PropTypes.shape({
		getFieldDecorator: PropTypes.func,
	}).isRequired,
	controls: PropTypes.arrayOf(PropTypes.shape({})),
	onSubmit: PropTypes.func,
	onChange: PropTypes.func,
	showSubmit: PropTypes.bool,
	submitText: PropTypes.string,
	filterType: PropTypes.string,
	layout: PropTypes.oneOf(['horizontal', 'vertical']),
	editMode: PropTypes.bool,
	debounceTime: PropTypes.number,
	loading: PropTypes.bool,
};

DataForm.defaultProps = {
	controls: null,
	onSubmit: () => {},
	onChange: () => {},
	showSubmit: true,
	layout: 'vertical',
	filterType: '',
	submitText: null,
	editMode: false,
	debounceTime: 300,
	loading: false,
};

export default Form.create({
	mapPropsToFields: (props) => {
		const { values } = props;
		return mapValues(values, value => Form.createFormField({ value }));
	},
	onValuesChange: (props, v, values) => {
		// console.log(props);
		if (props.onChange) {
			props.onChange(values);
		}
	},
})(DataForm);
