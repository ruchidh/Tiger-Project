import React, { Component } from 'react';
import merge from 'lodash/merge';
import cloneDeep from 'lodash/cloneDeep';

import { Input } from './styles';

class GSTInput extends Component {
	static defaultProps = {
		value: {
			stateCode: null,
			pan: null,
			entity: null,
			alpha: null,
			checkSum: null,
		},
	};
	onChange = e => {
		const { name, value } = e.target;
		let vals = cloneDeep(this.props.value);
		vals[name] = value;
		this.props.onChange(vals);
	};
	render() {
		return (
			<div>
				<Input
					disabled={this.props.disabled}
					style={{ display: 'inline-block', width: 50 }}
					placeholder="xx"
					maxLength={2}
					name="stateCode"
					onChange={this.onChange}
					value={this.props.value && this.props.value.stateCode}
					required
				/>
				<Input
					disabled={this.props.disabled}
					style={{ marginLeft: 8, display: 'inline-block', width: 103 }}
					placeholder="xxxxxxxxxx"
					maxLength={10}
					name="pan"
					onChange={this.onChange}
					value={this.props.value && this.props.value.pan}
					required
				/>
				<Input
					disabled={this.props.disabled}
					style={{ marginLeft: 8, display: 'inline-block', width: 40 }}
					placeholder="x"
					maxLength={1}
					name="entity"
					onChange={this.onChange}
					value={this.props.value && this.props.value.entity}
					required
				/>
				<Input
					disabled={this.props.disabled}
					style={{ marginLeft: 8, display: 'inline-block', width: 40 }}
					placeholder="x"
					maxLength={1}
					name="alpha"
					onChange={this.onChange}
					value={this.props.value && this.props.value.alpha}
					required
				/>
				<Input
					disabled={this.props.disabled}
					style={{ marginLeft: 8, display: 'inline-block', width: 40 }}
					placeholder="x"
					maxLength={1}
					name="checkSum"
					onChange={this.onChange}
					value={this.props.value && this.props.value.checkSum}
					required
				/>
			</div>
		);
	}
}

export default GSTInput;
