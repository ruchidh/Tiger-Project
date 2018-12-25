import React, { Component } from 'react';
import { Chip, ChipText } from './styles';

class PanelChip extends Component {
	render() {
		return (
			<Chip
				chipBackground={this.props.chipBackground}
				disabled={this.props.disabled}
				onClick={() => this.props.handler()}>
				<ChipText>{this.props.text}</ChipText>
			</Chip>
		);
	}
}

export default PanelChip;
