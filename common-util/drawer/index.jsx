import PropTypes from 'prop-types';
import { PoseGroup } from 'react-pose';

import {
	Overlay, Container, Close, Title, InnerContainer, BodyContainer,
} from './styles';

export default function Drawer(props) {
	const {
		show,
		onClose,
		children,
		width,
		title,
		placement,
	} = props;
	return (
		<PoseGroup>
			{show && [
				<Overlay key="overlay" blur />,
				(
					<Container key="drawer" pose={show ? 'open' : 'closed'} width={width} placement={placement}>
						<InnerContainer width={width} placement={placement}>
							{title ? (<Title>{title}</Title>) : null}
							<Close onClick={onClose} />
							<BodyContainer>
								{children}
							</BodyContainer>
						</InnerContainer>
					</Container>
				),
			]}
		</PoseGroup>
	);
}

Drawer.propTypes = {
	show: PropTypes.bool,
	onClose: PropTypes.func,
	children: PropTypes.node,
	width: PropTypes.number,
	title: PropTypes.string,
	placement: PropTypes.oneOf(['left', 'right']),
};

Drawer.defaultProps = {
	show: false,
	onClose: () => {},
	children: null,
	width: 300,
	title: null,
	placement: 'right',
};
