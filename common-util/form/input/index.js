import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Input, CheckBoxElement, TextArea, RadioElement, Container } from './styles';
import Commodity from '../../commodity';
import Pincode from '../pincode';
import Location from '../location';
import Error from '../error';

const Text = props => {
	const style = props.style || {},
		name = props.name;
	const list = [];
	if (props.type === 'text') {
		list.push(
			<Input
				key={0}
				{...props}
				style={props.style}
				disabled={props.disabled}
				borderRight={props.borderRight}
				marginRight={props.marginRight}
				width={props.width}
				border={props.border}
				borderRadius={props.borderRadius}
				textAlign={props.textAlign}
			/>,
		);
	} else if (props.type === 'number') {
		list.push(
			<Input
				key={0}
				{...props}
				type={props.type}
				style={props.style}
				disabled={props.disabled}
				borderRight={props.borderRight}
				marginRight={props.marginRight}
				width={props.width}
				border={props.border}
				value={props.value}
				borderRadius={props.borderRadius}
				textAlign={props.textAlign}
				max={props.max}
			/>,
		);
	} else if (props.type === 'textarea') {
		list.push(
			<TextArea
				key={0}
				{...props}
				style={props.style}
				name={props.name}
				cols={props.cols}
				rows={props.rows}
				disabled={props.disabled}
				borderRight={props.borderRight}
				marginRight={props.marginRight}
				width={props.width}
				border={props.border}
				borderRadius={props.borderRadius}
				textAlign={props.textAlign}
			/>,
		);
	} else if (props.type === 'password') {
		list.push(
			<Input
				key={0}
				{...props}
				style={props.style}
				disabled={props.disabled}
				borderRight={props.borderRight}
				marginRight={props.marginRight}
				width={props.width}
				border={props.border}
				borderRadius={props.borderRadius}
				textAlign={props.textAlign}
			/>,
		);
	} else if (props.type === 'pincode') {
		list.push(
			<Pincode
				key={0}
				name={props.name}
				handler={props.handler}
				placeholder={props.placeholder}
				value={props.value}
				inputPorps={props.inputPorps}
				disabled={props.disabled}
			/>,
		);
	} else if (props.type === 'city') {
		list.push(
			<Location
				key={0}
				types={['city']}
				name={props.name}
				handler={props.handler}
				placeholder={props.placeholder}
				value={props.value}
				inputProps={props.inputProps}
				excludeItems={props.excludeItems}
				disabled={props.disabled}
			/>,
		);
	} else if (props.type === 'port') {
		list.push(
			<Location
				key={0}
				types={['port']}
				name={props.name}
				handler={props.handler}
				placeholder={props.placeholder}
				value={props.value}
				inputProps={props.inputProps}
				excludeItems={props.excludeItems}
				disabled={props.disabled}
			/>,
		);
	} else if (props.type === 'commodity') {
		list.push(
			<Commodity
				key={0}
				name={props.name}
				handler={props.handler}
				placeholder={props.placeholder}
				value={props.value}
				multiple={props.multiple}
				inputProps={props.inputProps}
				excludeItems={props.excludeItems}
				disabled={props.disabled}
			/>,
		);
	}
	if (props.type === 'checkbox') {
		return (
			<CheckBoxElement className={props.className} style={props.style} key={0}>
				<label>{props.label}</label>
				{props.isUnControlled ? (
					<input
						type={props.type}
						name={props.name}
						defaultChecked={props.value}
						value={props.value}
						disabled={props.disabled}
					/>
				) : (
					<input
						type={props.type}
						name={props.name}
						checked={props.checked}
						onChange={props.handler}
						disabled={props.disabled}
					/>
				)}
				<span className="custom-checkbox" />
			</CheckBoxElement>
		);
	}
	if (props.type === 'radio' || props.type === 'bigRadio') {
		return (
			<RadioElement className={props.className} style={props.style} key={0} type={props.type}>
				{props.label ? <label>{props.label}</label> : null}
				{props.isUnControlled ? (
					<input
						type={'radio'}
						name={props.name}
						defaultChecked={props.value}
						value={props.value}
						disabled={props.disabled}
					/>
				) : (
					<input
						type={'radio'}
						name={props.name}
						checked={props.checked || false}
						onChange={e => props.handler(e)}
						disabled={props.disabled}
					/>
				)}
				<span className="custom-radio" />
			</RadioElement>
		);
	}

	if (name && props.error[name] && props.error[name].message) {
		props.hideLabel
			? (style.boxShadow = 'inset 0 0 0.1em 0.1em red')
			: (style.border = '2px solid red');
		if (!props.hideLabel) {
			list.push(<Error key={1}>{props.error[name].message}</Error>);
		}
	}
	return list;
};

Text.propTypes = {
	handler: PropTypes.func,
};

Text.defaultProps = {};

const mapStateToProps = ({ form: { error, hideLabel } }) => ({
	error,
	hideLabel,
});
export default connect(
	mapStateToProps,
	null,
)(Text);
