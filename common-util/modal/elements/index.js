import PropTypes from 'prop-types';

import {
	Body, Header, Title, Dialog, Footer, Add,
} from './styles';

export const ModalBody = ({
	className = '', children, darkModeEnabled, style,
}) => {
	const modeClass = darkModeEnabled ? 'dark' : '';
	const classes = [modeClass, className].join(' ');
	return (
		<Body className={classes} style={{ ...style }}>
			{children}
		</Body>
	);
};

export const ModalHeader = ({
	children, className, greyModelEnabled, darkModeEnabled, style,
}) => {
	const modeClass = darkModeEnabled ? 'dark' : greyModelEnabled ? 'grey' : '';
	const classes = [modeClass, className || ''].join(' ');
	return (
		<Header className={classes} style={{ ...style }}>
			{children}
		</Header>
	);
};

export const ModalTitle = ({
	className, style, greyModelEnabled, children,
}) => (
	<Title className={className} style={style}>
		{greyModelEnabled ? <Add src="" /> : null} {children}
	</Title>
);

export const ModalDialog = ({
	children,
	onEnter,
	onEntered,
	onEntering,
	onExit,
	onExited,
	onExiting,
}) => (
	<Dialog
		onEnter={onEnter}
		onEntered={onEntered}
		onEntering={onEntering}
		onExit={onExit}
		onExited={onExited}
		onExiting={onExiting}>
		{children}
	</Dialog>
);

export const ModalFooter = ({ children, greyModelEnabled, className }) => {
	const modeClass = greyModelEnabled ? 'grey' : '';
	const classes = [modeClass, className || ''].join(' ');
	return <Footer className={classes}>{children}</Footer>;
};

ModalDialog.propTypes = {
	onEnter: PropTypes.func,
	onEntered: PropTypes.func,
	onEntering: PropTypes.func,
	onExit: PropTypes.func,
	onExited: PropTypes.func,
	onExiting: PropTypes.func,
	greyModelEnabled: PropTypes.bool,
	showIcon: PropTypes.func,
	darkModeEnabled: PropTypes.bool,
};
