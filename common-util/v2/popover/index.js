import { Component } from 'react';
import PropTypes from 'prop-types';

import { PopoverContainer } from './styles';

class CogoPopover extends Component {
	static propTypes = {
		children: PropTypes.node.isRequired,
	};

	static defaultProps = {};

	render() {
		const {
			children, target, isOpen, ...rest
		} = this.props;
		return (
			<PopoverContainer isOpen={isOpen} body={children} {...rest}>
				{target}
			</PopoverContainer>
		);
	}
}

export default CogoPopover;
