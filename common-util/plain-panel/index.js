import PropTypes from 'prop-types';
import PanelChip from './panel-chip';

import { Container, Title, CloseButton, Group } from './styles';

const Panel = props => (
	<Container
		tabPill={props.tabPill}
		boxShadow={props.boxShadow}
		card={props.card}
		heading={props.heading}
		width={props.width}
		height={props.height}
		minWidth={props.minWidth}
		minHeight={props.minHeight}
		flex={props.flex}
		marginTop={props.marginTop}
		padding={props.padding}
		paddingBottom={props.paddingBottom}
		className={props.className || ''}
		overflow={props.overflow}
		style={props.style}
		onClick={props.onClick}
		>
		{props.heading ? (
			props.headerRight ? (
				<Group>
					<h4>{props.heading}</h4>
					<div>{props.headerRight()}</div>
				</Group>
			) : (
				<Group>
					<h4>{props.heading}</h4>
				</Group>
			)
		) : null}

		{props.children}
		{props.chipText ? (
			<PanelChip
				text={props.chipText}
				split={props.split}
				disabled={props.disabled}
				chipBackground={props.chipBackground}
				handler={() => props.handler()}
			/>
		) : null}

		{props.closeHandler ? <CloseButton onClick={props.closeHandler}>X</CloseButton> : null}
	</Container>
);

Panel.propTypes = {
	onClick: PropTypes.func,
	handler: PropTypes.func,
};

Panel.defaultProps = {
	onClick: () => {},
	handler: () => {},
};

export default Panel;
