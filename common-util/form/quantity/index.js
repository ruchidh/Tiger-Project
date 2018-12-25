import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container, Button, Amount } from './styles';

class Quantity extends Component {
	onSubtract = () => {
		const value = this.props.min
			? this.props.value > this.props.min
				? this.props.value - 1
				: this.props.value
			: this.props.value > 1
				? this.props.value - 1
				: this.props.value;
		this.props.onChange(value);
	};

	onAdd = () => {
		const value = this.props.max
			? this.props.value < this.props.max
				? this.props.value + 1
				: this.props.value
			: this.props.value + 1;
		this.props.onChange(value);
	};

	onInputChange = event => {
		const { value } = event.target;
		if (value > 0 || value === '') {
			this.props.onChange(value === '' ? '' : parseInt(value, 10));
		}
	};

	onBlur = () => {
		if (this.props.value === '' || this.props.value < 1) {
			this.props.onChange(1);
		}
	};

	render() {
		return (
			<Container size={this.props.size}>
				<Button size={this.props.size} onClick={this.onSubtract}>
					-
				</Button>
				<Amount
					value={this.props.value}
					onChange={this.onInputChange}
					onBlur={this.onBlur}
					size={this.props.size}
				/>
				<Button size={this.props.size} onClick={this.onAdd}>
					+
				</Button>
			</Container>
		);
	}
}

Quantity.propTypes = {
	size: PropTypes.string,
	min: PropTypes.number,
	max: PropTypes.number,
};

Quantity.defaultProps = {
	size: 'md', //sm, md, lg
};

export default Quantity;
