import PropTypes from 'prop-types';

import { Input, CheckBoxElement, TextArea, RadioElement } from './styles';
import ErrorPopover from '../../error-popover';

const Text = props => {
	const style = props.style || {},
		name = props.name;
	const list = [];
	if (props.type === 'text' || props.type === 'email') {
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
	if (props.type === 'radio') {
		return (
			<RadioElement className={props.className} style={props.style} key={0}>
				{props.label ? <label>{props.label}</label> : null}
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
						onChange={e => props.handler(e)}
						disabled={props.disabled}
					/>
				)}
				<span className="custom-radio" />
			</RadioElement>
		);
	}

	if (
		props.name &&
		props.error &&
		props.error[name] &&
		props.error[name].message &&
		props.error[name].message !== ''
	) {
		props.hideLabel
			? (style.boxShadow = 'inset 0 0 0.1em 0.1em red')
			: (style.border = '2px solid red');
		if (!props.hideLabel) {
			list.push(
				<ErrorPopover
					position={props.errorPosition ? props.errorPosition : 'bottom'}
					message={props.error[name].message}
				/>,
			);
		}
	}
	return list;
};

Text.propTypes = {
	handler: PropTypes.func,
};

Text.defaultProps = {};

export default Text;
