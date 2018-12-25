import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Popover from './styles';

class Tooltip extends Component {
	state = { isOpen: false, hovering: false };

	handleOpen = () => {
		this.setState({ hovering: true }, () => setTimeout(() => {
			const { hovering } = this.state;
			if (hovering) {
				this.setState({ isOpen: true });
			}
		}, 300));
	};

	handleClose = () => this.setState({ isOpen: false, hovering: false });

	render() {
		const {
			message, place, children, tootTipContainerStyle, theme,
		} = this.props;
		const { isOpen } = this.state;

		return (
			<Popover
				className={theme}
				isOpen={isOpen}
				preferPlace={place}
				onOuterAction={this.handleClose}
				body={message}
			>
				<div
					style={tootTipContainerStyle}
					onMouseEnter={this.handleOpen}
					onMouseLeave={this.handleClose}
				>
					{children}
				</div>
			</Popover>
		);
	}
}

Tooltip.propTypes = {
	message: PropTypes.string.isRequired,
	place: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
	tootTipContainerStyle: PropTypes.objectOf,
	theme: PropTypes.string,
};

Tooltip.defaultProps = {
	tootTipContainerStyle: {},
	theme: '',
};

export default Tooltip;
